import { Saison } from "src/saisons/entities/saison.entity";

export class CreateAlimentDto {
    libelle: string;
    age_introduction: number;
    id_categorie: number;
    saisons : Saison[]
}
