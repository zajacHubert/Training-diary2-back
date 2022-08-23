import { Controller, Get } from '@nestjs/common';
import { TrainingsService } from './trainings.service';

@Controller('trainings')
export class TrainingsController {
    constructor(private trainingsService: TrainingsService) { }

    @Get('/')
    getAllTrainings(): Promise<Training> {
        return this.trainingsService.getAllTrainings(user);
    }

}
