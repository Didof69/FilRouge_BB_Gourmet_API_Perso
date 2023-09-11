import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
