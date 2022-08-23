import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { UsersEntity } from 'src/auth/user.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { EditExerciseDto } from './dto/edit-exercise.dto';
import { DeleteTrainingResponse, Exercise, Training } from './training.model';
import { TrainingsService } from './trainings.service';

@Controller('trainings')
@UseGuards(AuthGuard())
export class TrainingsController {
    constructor(private trainingsService: TrainingsService) { }

    @Get('/')
    getAllTrainings(
        @GetUser() user: UsersEntity,
    ): Promise<Training> {
        return this.trainingsService.getAllTrainings(user);
    }

    @Get('/:title/:date')
    getTrainingByTitleAndDate(
        @Param('title') title: string,
        @Param('date') date: Date,
        @GetUser() user: UsersEntity,
    ): Promise<Training> {
        return this.trainingsService.getTrainingByTitleAndDate(title, date, user);
    }

    @Get('/:id')
    getExerciseById(
        @Param('id') id: string,
        @GetUser() user: UsersEntity,
    ): Promise<Exercise> {
        return this.trainingsService.getExerciseById(id, user);
    }

    @Post('/')
    createExercise(
        @Body() createExerciseDto: CreateExerciseDto,
        @GetUser() user: UsersEntity,
    ): Promise<Exercise> {
        return this.trainingsService.createExercise(createExerciseDto, user);
    }

    @Delete('/:title/:date')
    deleteTraining(
        @Param('title') title: string,
        @Param('date') date: Date,
        @GetUser() user: UsersEntity,
    ): Promise<DeleteTrainingResponse> {
        return this.trainingsService.deleteExercise(title, date, user);
    }

    @Patch('/:title/:date')
    editTraining(
        @Body() editTrainingDto: EditExerciseDto,
        @GetUser() user: UsersEntity,
    ) {
        return this.trainingsService.editExercise(editTrainingDto, user);
    }

}
