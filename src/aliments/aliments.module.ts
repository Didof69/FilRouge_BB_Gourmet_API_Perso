import { Module } from '@nestjs/common';
import { AlimentsService } from './aliments.service';
import { AlimentsController } from './aliments.controller';

@Module({
  controllers: [AlimentsController],
  providers: [AlimentsService],
})
export class AlimentsModule {}
