import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { EmployeesGender } from '../enum/employees-gender.enum';

export class EPIAtivity {
  activities: string;
  epi: string;
  ca: string;
}

export class EmployeesDto {
  @ApiProperty()
  @IsNotEmpty()
  id?: number;
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
  position: string;
  @ApiProperty()
  EPI: boolean;
  @ApiProperty()
  EPIactivities: EPIAtivity[];
}
