import { Module } from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { _EmployeesController } from "./employees.controller";

@Module({
  controllers: [_EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
