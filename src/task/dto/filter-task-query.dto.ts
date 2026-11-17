import { IsIn, IsOptional } from 'class-validator';

export class FilterTaskQueryDto {
  @IsOptional()
  @IsIn(['pending', 'in_progress', 'completed'])
  status?: 'pending' | 'in_progress' | 'completed'

  @IsOptional()
  @IsIn(['low', 'medium', 'high'])
  priority?: 'low' | 'medium' | 'high'
}
