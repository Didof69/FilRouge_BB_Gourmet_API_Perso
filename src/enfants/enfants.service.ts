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

  async update(id: number, updateEnfantDto: UpdateEnfantDto) {
    const enfant = await this.findOne(id);
    const newEnfant = this.enfantsRepository.merge(enfant, updateEnfantDto);
    const result = await this.enfantsRepository.save(newEnfant);
    return result;
  }

  async remove(id: number) {
    const enfant = await this.findOne(id);
    await this.enfantsRepository.remove(enfant);
    return `Enfant with id : ${id} has been deleted`;
  }
}
