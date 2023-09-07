import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nom: string;

  @Column({ nullable: false })
  prenom: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  mot_de_passe: string;

  @Column({ nullable: false })
  admin: boolean;
}
