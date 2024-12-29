import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { EmployeesGender } from '../enum/employees-gender.enum';

export type EPIAtivity = {
  EPIactivity: string;
  EPIepi: string;
  EPIca: string;
}

export class GetEmployeesDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
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
  birthdayDate: any;
  @ApiProperty()
  @IsNotEmpty()
  rg: string;
  @ApiProperty()
  @IsNotEmpty()
  role: string;
  @ApiProperty()
  EPI: boolean;
  @ApiProperty()
  healthCertificate: string | null;
  @ApiProperty()
  EPIactivities: EPIAtivity[];

}
