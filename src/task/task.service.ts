import { Injectable, NotFoundException } from '@nestjs/common';
import type { TaskModel } from '../type/interface.js';

@Injectable()
export class TaskService {
  private readonly task: TaskModel[] = [
    {
      id: 1,
      title: 'Buy some potatoes',
      description: 'Buy 2kg of potatoes from the market',
      status: 'pending',
      priority: 'medium',
      dueDate: '2026-11-19',
      createdAt: '2026-11-17T06:35:00.000Z',
      updatedAt: '2026-11-17T06:35:00.000Z',
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      description: 'Practice interfaces, types, generics and enums',
      status: 'in_progress',
      priority: 'high',
      dueDate: '2026-11-22',
      createdAt: '2026-11-17T07:00:00.000Z',
      updatedAt: '2026-11-17T08:30:00.000Z',
    },
    {
      id: 3,
      title: 'Complete NestJS project',
      description: 'Build a personal task manager REST API',
      status: 'in_progress',
      priority: 'high',
      dueDate: '2026-11-30',
      createdAt: '2026-11-16T10:00:00.000Z',
      updatedAt: '2026-11-17T09:00:00.000Z',
    },
    {
      id: 4,
      title: 'Read a programming book',
      description: 'Read 20 pages about software engineering',
      status: 'completed',
      priority: 'low',
      dueDate: null,
      createdAt: '2026-11-15T08:00:00.000Z',
      updatedAt: '2026-11-17T11:00:00.000Z',
    },
    {
      id: 5,
      title: 'Practice PostgreSQL',
      description: 'Learn SELECT, INSERT, UPDATE and DELETE queries',
      status: 'pending',
      priority: 'medium',
      dueDate: '2026-11-25',
      createdAt: '2026-11-17T12:00:00.000Z',
      updatedAt: '2026-11-17T12:00:00.000Z',
    },
  ]

  findAll(
    status?: TaskModel['status'],
    priority?: TaskModel['priority'],
  ): TaskModel[] {
    let tasks = this.task;

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (priority) {
      tasks = tasks.filter((task) => task.priority === priority);
    }

    if (tasks.length === 0) {
      throw new NotFoundException(`Ticket with status ${status} and priority ${priority} not found`)
    }
    return tasks;
  }

}
