import { Module } from '@nestjs/common';
import { SaisonsService } from './saisons.service';
import { SaisonsController } from './saisons.controller';

@Module({
  controllers: [SaisonsController],
  providers: [SaisonsService],
})
export class SaisonsModule {}
