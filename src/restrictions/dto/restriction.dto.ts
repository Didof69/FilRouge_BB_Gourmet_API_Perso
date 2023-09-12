import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class RestrictionDto {
@IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(15)
  id: number;
}
