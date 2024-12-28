import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";
import { Observable } from "rxjs";
import { GetEmployeesDto } from "src/shared/interfaces/employeesGet.interface";
import { PostEmployeesDto } from "src/shared/interfaces/employeesPost.interface";

@Injectable()
export class EmployeesService {
  private employees = [];
  constructor(private configService: ConfigService) { }

  async findAll() {
    try {
      const _resEmplyeesPage = await axios.get(`${this.configService.get<string>('URI_DB_JSON')}/employees`);
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

  async createEmployee(employee: PostEmployeesDto) {
    try {
      const _resEmplyeesPage = await axios.post(`${this.configService.get<string>('URI_DB_JSON')}/employees`, employee);
      this.employees = _resEmplyeesPage.data;
      return this.employees;
    } catch (error) {
      console.error(`Error in create: ${this.configService.get<string>('URI_DB_JSON')}`);
      throw error;
    }
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
