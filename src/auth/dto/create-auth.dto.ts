import { IsBoolean, IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsEmail()
  @Matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/)
  mot_de_passe: string;

  @IsNotEmpty()
  @IsBoolean()
  admin: boolean;
}
