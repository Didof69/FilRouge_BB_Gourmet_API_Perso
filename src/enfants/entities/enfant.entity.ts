import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enfant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  prenom: string;

  @Column({ nullable: false, type: 'date' })
  date_naissance: Date;

  @Column({ nullable: false, type: 'int' })
  id_utilisateur: number;
}
