import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { EditExerciseDto } from './dto/edit-exercise.dto';
import { ExerciseEntity } from './exercise.entity';
import { DeleteTrainingResponse, Exercise, Training } from './training.model';

@Injectable()
export class TrainingsService {
    constructor(
        @InjectRepository(ExerciseEntity) private trainingsRepository: Repository<ExerciseEntity>,
    ) { }

    async getExerciseById(id: string, user: UsersEntity): Promise<ExerciseEntity> {
        const found = await this.trainingsRepository.findOneBy({ id, user });
        if (!found) {
            throw new NotFoundException(`There is no exercise with ID:${id}`);
        }
        return found;
    }

    async getTrainingByTitleAndDate(title: string, date: Date, user: UsersEntity): Promise<Training> {
        const found = await this.trainingsRepository.findBy({ title, date: new Date(date), user });

        if (found.length === 0) {
            throw new NotFoundException(`There is no training ${title} performed ${date}`);
        }

        return found;
    }



    async getAllTrainings(user: UsersEntity): Promise<Training> {

        return await this.trainingsRepository
            .createQueryBuilder('trainings')
            .select(['trainings.title', 'trainings.date'])
            .distinct()
            .where({ user })
            .orderBy('trainings.date', 'DESC')
            .getRawMany();
    }


    async createExercise(createExerciseDto: CreateExerciseDto, user: UsersEntity): Promise<Exercise> {

        const exercise = this.trainingsRepository.create({ ...createExerciseDto, user, });

        await this.trainingsRepository.save(exercise);
        return exercise;
    }

    async deleteExercise(title: string, date: Date, user: UsersEntity): Promise<DeleteTrainingResponse> {

        const result = await this.trainingsRepository.delete({ title, date: new Date(date), user });
        if (result.affected === 0) {
            throw new NotFoundException(`There is no training ${title} performed ${date}`);
        } else {
            return {
                isSuccess: true,
            }
        }
    }

    async editExercise(editTrainingDto: EditExerciseDto, user: UsersEntity): Promise<void> {

        const found = await this.getExerciseById(editTrainingDto.id, user);
        await this.trainingsRepository.update(found, editTrainingDto);

    }
}
