import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise.entity';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseEntity]),

  ],
  controllers: [TrainingsController],
  providers: [TrainingsService],
})
export class TrainingsModule { }
