import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enfant } from './entities/enfant.entity';

@Injectable()
export class EnfantsService {
  constructor(
    @InjectRepository(Enfant)
    private enfantsRepository: Repository<Enfant>,
  ) {}

  async create(createEnfantDto: CreateEnfantDto, id_utilisateur: number) {
    const enfant = this.enfantsRepository.create(createEnfantDto);
    enfant.id_utilisateur = id_utilisateur;
    console.log('infos enfant sauvegardées :', enfant);
    const result = await this.enfantsRepository.save(enfant);
    return result;
  }

  async findEnfantByIdUtilisateur(id_utilisateur: number): Promise<Enfant[]> {
    const found = await this.enfantsRepository.find({
      where: { id_utilisateur },
    });

    return found;
  }

  async findOne(id: number) {
    const found = await this.enfantsRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Enfant with the id ${id} not found`);
    }
    return found;
  }

  async update(
    idEnfant: number,
    updateEnfantDto: UpdateEnfantDto,
    idUtilisateur: number,
  ) {
    let enfant = await this.findOne(idEnfant);
    enfant.prenom = updateEnfantDto.prenom;
    enfant.date_naissance = updateEnfantDto.date_naissance;
    enfant.id_utilisateur = idUtilisateur;
    enfant.restrictions = updateEnfantDto.restrictions;

    const result = await this.enfantsRepository.save(enfant);
    return result;
  }

  async remove(idEnfant: number, idUtilisateur: number) {
    const enfant = await this.findOne(idEnfant);
    if (enfant.id_utilisateur === idUtilisateur) {
      await this.enfantsRepository.remove(enfant);
      return `Enfant with id : ${idEnfant} has been deleted`;
    }

    throw new NotFoundException(
      `Vous ne detenez pas les droit pour supprimer cet enfant.`,
    );
  }
}
