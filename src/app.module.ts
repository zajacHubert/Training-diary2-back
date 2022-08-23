import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './trainings/exercise.entity';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'trainings_diary',
      entities: [ExerciseEntity],
      synchronize: true,
    }),
    TrainingsModule,
  ],
})
export class AppModule { }  
