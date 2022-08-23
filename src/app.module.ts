import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [TrainingsModule],
})
export class AppModule { }
