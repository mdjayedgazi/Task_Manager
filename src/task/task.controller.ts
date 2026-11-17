import { Controller, Get, Query } from '@nestjs/common';
import { TaskService } from './task.service.js';
import type { TaskModel } from '../type/interface.js';
import { FilterTaskQueryDto } from './dto/filter-task-query.dto.js';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(@Query() filter: FilterTaskQueryDto): TaskModel[] {
    return this.taskService.findAll(filter.status, filter.priority);
  }
}
