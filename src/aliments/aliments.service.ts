import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlimentDto } from './dto/create-aliment.dto';
import { UpdateAlimentDto } from './dto/update-aliment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aliment } from './entities/aliment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlimentsService {
  constructor(
    @InjectRepository(Aliment) private alimentsRepository: Repository<Aliment>,
  ) {}

  async create(createAlimentDto: CreateAlimentDto) {
    const aliment = this.alimentsRepository.create(createAlimentDto);
    const result = await this.alimentsRepository.save(aliment);
    return result;
  }

  findAll() {
    return this.alimentsRepository.find();
  }

  async findOne(id: number) {
    const found = await this.alimentsRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Aliment with the id ${id} not found`);
    }
    return found;
  }

  async update(id: number, updateAlimentDto: UpdateAlimentDto) {
    let aliment = await this.findOne(id);
    console.log(aliment);
    
    aliment.libelle= updateAlimentDto.libelle;
    aliment.age_introduction= updateAlimentDto.age_introduction;
    aliment.id_categorie= updateAlimentDto.id_categorie;
    aliment.saisons= updateAlimentDto.saisons;
    aliment.restrictions= updateAlimentDto.restrictions;
    
    const result = await this.alimentsRepository.save(aliment);
    console.log(result);
    
    return result;
  }

  async remove(id: number) {
    const aliment = await this.findOne(id);
    await this.alimentsRepository.remove(aliment);
    return `Aliment with id : ${id} has been deleted`;
  }
}
