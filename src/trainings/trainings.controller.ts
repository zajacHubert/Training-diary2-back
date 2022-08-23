import { Controller, Get } from '@nestjs/common';
import { Training } from './training.model';
import { TrainingsService } from './trainings.service';

@Controller('trainings')
export class TrainingsController {
    constructor(private trainingsService: TrainingsService) { }

    @Get('/')
    getAllTrainings(): Promise<Training> {
        return this.trainingsService.getAllTrainings(user);
    }

    @Get('/:title/:date')
    getTrainingByTitleAndDate(
        @Param('title') title: string,
        @Param('date') date: Date,

    ): Promise<Training> {

        return this.trainingsService.getTrainingByTitleAndDate(title, date);
    }

    @Get('/:id')
    getExerciseById(
        @Param('id') id: string,

    ): Promise<Exercise> {
        return this.trainingsService.getExerciseById(id);
    }

    @Post('/')
    createExercise(
        @Body() createExerciseDto: CreateExerciseDto,

    ): Promise<Exercise> {
        return this.trainingsService.createExercise(createExerciseDto);
    }

    @Delete('/:title/:date')
    deleteTraining(
        @Param('title') title: string,
        @Param('date') date: Date,

    ): Promise<DeleteTrainingResponse> {
        return this.trainingsService.deleteExercise(title, date);
    }

    @Patch('/:title/:date')
    editTraining(
        @Body() editTrainingDto: EditExerciseDto,

    ) {
        return this.trainingsService.editExercise(editTrainingDto);
    }

}
