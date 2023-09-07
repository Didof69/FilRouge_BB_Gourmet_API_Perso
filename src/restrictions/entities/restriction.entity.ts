import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restriction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  libelle: string;
}
