import { Injectable } from '@nestjs/common';
import { CreateEnfantDto } from './dto/create-enfant.dto';
import { UpdateEnfantDto } from './dto/update-enfant.dto';

@Injectable()
export class EnfantsService {
  create(createEnfantDto: CreateEnfantDto) {
    return 'This action adds a new enfant';
  }

  findAll() {
    return `This action returns all enfants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enfant`;
  }

  update(id: number, updateEnfantDto: UpdateEnfantDto) {
    return `This action updates a #${id} enfant`;
  }

  remove(id: number) {
    return `This action removes a #${id} enfant`;
  }
}
