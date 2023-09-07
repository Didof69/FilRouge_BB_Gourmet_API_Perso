import { Injectable } from '@nestjs/common';
import { CreateSaisonDto } from './dto/create-saison.dto';
import { UpdateSaisonDto } from './dto/update-saison.dto';

@Injectable()
export class SaisonsService {
  create(createSaisonDto: CreateSaisonDto) {
    return 'This action adds a new saison';
  }

  findAll() {
    return `This action returns all saisons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saison`;
  }

  update(id: number, updateSaisonDto: UpdateSaisonDto) {
    return `This action updates a #${id} saison`;
  }

  remove(id: number) {
    return `This action removes a #${id} saison`;
  }
}
