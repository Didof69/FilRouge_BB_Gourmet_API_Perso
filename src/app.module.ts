import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { EnfantsModule } from './enfants/enfants.module';
import { RestrictionsModule } from './restrictions/restrictions.module';
import { AlimentsModule } from './aliments/aliments.module';
import { CategoriesModule } from './categories/categories.module';
import { SaisonsModule } from './saisons/saisons.module';

@Module({
  imports: [UtilisateursModule, EnfantsModule, RestrictionsModule, AlimentsModule, CategoriesModule, SaisonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
