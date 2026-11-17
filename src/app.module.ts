import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TaskService } from './task/task.service.js';
import { TaskModule } from './task/task.module.js';
import { TaskController } from './task/task.controller.js';
import { TaskService } from './task.service.js';
import { TaskService } from './task/task.service.js';

@Module({
  imports: [TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
