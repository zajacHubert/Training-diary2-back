import { Module } from '@nestjs/common';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [TrainingsModule],
})
export class AppModule { }
