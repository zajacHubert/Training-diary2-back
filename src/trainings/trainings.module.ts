import { Module } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';

@Module({
  providers: [TrainingsService],
  controllers: [TrainingsController]
})
export class TrainingsModule {}
