import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { Utilisateur } from './entities/utilisateur.entity';
import { ApiTags } from '@nestjs/swagger';


@Controller('utilisateurs')
@UseGuards(AuthGuard())
@ApiTags('Utilisateurs Controller')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  // @Post()
  // create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
  //   return this.utilisateursService.create(createUtilisateurDto);
  // }

  // @Get()
  // findAll() {
  //   return this.utilisateursService.findAll();
  // }

  @Get()
  findOne(@GetUser() utilisateur: Utilisateur) {
    return this.utilisateursService.findOne(utilisateur.id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
  //   return this.utilisateursService.update(+id, updateUtilisateurDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.utilisateursService.remove(+id);
  // }
}
