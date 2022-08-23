import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { EditExerciseDto } from './dto/edit-exercise.dto';
import { ExerciseEntity } from './exercise.entity';
import { DeleteTrainingResponse, Exercise, Training } from './training.model';

@Injectable()
export class TrainingsService {

    constructor(@InjectRepository(ExerciseEntity) private trainingsRepository: Repository<ExerciseEntity>) { }

    async getExerciseById(id: string): Promise<ExerciseEntity> {
        const found = await this.trainingsRepository.findOneBy({ id });
        if (!found) {
            throw new NotFoundException(`There is no exercise with ID:${id}`);
        }
        return found;
    }

    async getTrainingByTitleAndDate(title: string, date: Date,): Promise<Training> {
        const found = await this.trainingsRepository.findBy({ title, date: new Date(date) });

        if (found.length === 0) {
            throw new NotFoundException(`There is no training ${title} performed ${date}`);
        }

        return found;
    }



    async getAllTrainings(): Promise<Training> {

        return await this.trainingsRepository
            .createQueryBuilder('trainings')
            .select(['trainings.title', 'trainings.date'])
            .distinct()
            .where({})
            .orderBy('trainings.date', 'DESC')
            .getRawMany();

    }


    async createExercise(createExerciseDto: CreateExerciseDto,): Promise<Exercise> {

        const exercise = this.trainingsRepository.create({ ...createExerciseDto });

        await this.trainingsRepository.save(exercise);
        return exercise;
    }

    async deleteExercise(title: string, date: Date): Promise<DeleteTrainingResponse> {


        const result = await this.trainingsRepository.delete({ title, date: new Date(date) });
        if (result.affected === 0) {
            throw new NotFoundException(`There is no training ${title} performed ${date}`);
        } else {
            return {
                isSuccess: true,
            }
        }
    }

    async editExercise(editTrainingDto: EditExerciseDto): Promise<void> {

        const found = await this.getExerciseById(editTrainingDto.id);
        await this.trainingsRepository.update(found, editTrainingDto);

    }
}
