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

  async findById(id: string){
    try {
      const _resEmplyeesPage = await axios.get(`${this.configService.get<string>('URI_DB_JSON')}/employees/${id}`);
      this.employees = _resEmplyeesPage.data;
      return this.employees;
    } catch (error) {
      console.error(`Error in get by id: ${this.configService.get<string>('URI_DB_JSON')}`);
      throw error;
    }
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
  

  async updateEmployee(id: string, update: PostEmployeesDto) {
    try {
      const _resupdateEmployee = await axios.put(`${this.configService.get<string>('URI_DB_JSON')}/employees/${id}`, update);
      this.employees = _resupdateEmployee.data;
      return this.employees;
    } catch (error) {
      console.error(`Error in create: ${this.configService.get<string>('URI_DB_JSON')}`);
      throw error;
    }
  }

  async deleteEmployee(_id: string) {
    try {
      const _resEmplyee = await axios.delete(`${this.configService.get<string>('URI_DB_JSON')}/employees/${_id}`);
      if(_resEmplyee) return true
    } catch (error) {
      console.error(`Error in delete : ${this.configService.get<string>('URI_DB_JSON')}`);
      throw error;
    }
  }

}
