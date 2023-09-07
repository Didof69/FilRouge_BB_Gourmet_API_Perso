import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Saison {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  libelle: string;
}
