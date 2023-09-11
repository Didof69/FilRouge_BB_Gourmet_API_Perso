import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepository: Repository<Utilisateur>
  ) { }

  async register(createAuthDto: CreateAuthDto) {
    const { nom, prenom, email, mot_de_passe, admin } = createAuthDto;

   	// hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(mot_de_passe, salt);

		// création d'une entité utilisateur
    const utilisateur = this.utilisateurRepository.create({
      nom,
      prenom,
      email,
      mot_de_passe: hashedPassword,
      admin
    });

    try {
			// enregistrement de l'entité utilisateur
			const createdUser = await this.utilisateurRepository.save(utilisateur);
      delete createdUser.mot_de_passe;
      return createdUser;
    } catch (error) {
			// gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('cet email est déjà utilisé');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
