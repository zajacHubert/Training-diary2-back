import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ExerciseEntity } from './exercise.entity';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExerciseEntity]),
    AuthModule,
  ],
  controllers: [TrainingsController],
  providers: [TrainingsService],
})
export class TrainingsModule { }
