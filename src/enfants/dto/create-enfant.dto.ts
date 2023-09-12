import { Type } from 'class-transformer';
import {
  IsArray,
  IsISO8601,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { RestrictionDto } from 'src/restrictions/dto/restriction.dto';
import { Restriction } from 'src/restrictions/entities/restriction.entity';

export class CreateEnfantDto {
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  date_naissance: Date;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  id_utilisateur: number;

  @IsArray()
  @ValidateNested({ each: true }) // Valide chaque élément du tableau
  @Type(() => RestrictionDto) // Utilisez le DTO de validation des Saison
  restrictions: Restriction[];
}

