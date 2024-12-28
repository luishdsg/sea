import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";
import { Observable } from "rxjs";
import { EmployeesDto } from "src/shared/interfaces/employees.interface";

@Injectable()
export class EmployeesService {
  private employees = [];
  constructor(private configService: ConfigService) { }

  async findAllPerPage(_page: number) {
    try {
      const _resEmplyeesPage = await axios.get(`${this.configService.get<string>('URI_DB_JSON')}/employees?_page=${_page}&_per_page=10`);
      this.employees = _resEmplyeesPage.data;
      return this.employees;
    } catch (error) {
      console.error(`Error in all: ${this.configService.get<string>('URI_DB_JSON')}`);
      throw error;
    }
  }

  findOne(id: number) {
    return this.employees.find((employee) => employee.id === id);
  }

  create(employee: any) {
    const newEmployee = { id: Date.now(), ...employee };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(id: number, updateData: any) {
    const employeeIndex = this.employees.findIndex((e) => e.id === id);
    if (employeeIndex > -1) {
      this.employees[employeeIndex] = {
        ...this.employees[employeeIndex],
        ...updateData,
      };
      return this.employees[employeeIndex];
    }
    return null;
  }


  async deleteEmployee(_id: number) {
    try {
      const _resEmplyee = await axios.delete(`${this.configService.get<string>('URI_DB_JSON')}/employees/${_id}`);
      if(_resEmplyee) return true
    } catch (error) {
      console.error(`Error in delete : ${this.configService.get<string>('URI_DB_JSON')}`);
      throw error;
    }
  }

}
