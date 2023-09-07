import { Injectable } from '@nestjs/common';
import { CreateAlimentDto } from './dto/create-aliment.dto';
import { UpdateAlimentDto } from './dto/update-aliment.dto';

@Injectable()
export class AlimentsService {
  create(createAlimentDto: CreateAlimentDto) {
    return 'This action adds a new aliment';
  }

  findAll() {
    return `This action returns all aliments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aliment`;
  }

  update(id: number, updateAlimentDto: UpdateAlimentDto) {
    return `This action updates a #${id} aliment`;
  }

  remove(id: number) {
    return `This action removes a #${id} aliment`;
  }
}
