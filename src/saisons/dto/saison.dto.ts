import { IsNotEmpty, IsInt, Min, Max } from "class-validator";

export class SaisonDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  id: number;
}
