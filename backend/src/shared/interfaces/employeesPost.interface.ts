import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { EmployeesGender } from '../enum/employees-gender.enum';
import { EPIAtivity } from './employeesGet.interface';

export class PostEmployeesDto {
  @ApiProperty()
  @IsNotEmpty()
//   id?: string;
  @ApiProperty()
  @IsNotEmpty()
  active: boolean;
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  gender: EmployeesGender;
  @ApiProperty()
  @IsNotEmpty()
  cpf: string;
  @ApiProperty()
  @IsNotEmpty()
  birthdayDate: string;
  @ApiProperty()
  @IsNotEmpty()
  rg: string;
  @ApiProperty()
  @IsNotEmpty()
  role: string;
  @ApiProperty()
  EPI: boolean;
  @ApiProperty()
  healthCertificate: File | null;
  @ApiProperty()
  EPIactivities: EPIAtivity[];

}
