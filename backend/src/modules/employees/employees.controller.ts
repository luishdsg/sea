import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetEmployeesDto } from "src/shared/interfaces/employeesGet.interface";
import { PostEmployeesDto } from "src/shared/interfaces/employeesPost.interface";

@ApiTags('get')
@Controller("employees")
export class _EmployeesController {
  constructor(private readonly _employeesService: EmployeesService) { }

  @ApiResponse({ status: 200, description: 'get all employees' })
  @ApiOperation({ summary: 'get all employees' })
  @Get()
  async getAllEmployees()
    : Promise<GetEmployeesDto[]> {
    try {
      return this._employeesService.findAll();
    } catch (error) {
      console.error(`Error in get all employees: ${error.message}`);
      throw new HttpException('Error in get all employees', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiResponse({ status: 200, description: 'get by id: employees' })
  @ApiOperation({ summary: 'get by id: employees' })
  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
      return this._employeesService.findById(id);
    } catch (error) {
      console.error(`Error in get by id: ${error.message}`);
      throw new HttpException('Error in get by id:', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @ApiResponse({ status: 200, description: 'create employees' })
  @ApiOperation({ summary: 'create employees' })
  @Post()
  async createEmployee(@Body() createEmployeeDto: PostEmployeesDto) {
    try {
      return this._employeesService.createEmployee(createEmployeeDto);
    } catch (error) {
      console.error(`Error in create employees: ${error.message}`);
      throw new HttpException('Error in create employees', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiResponse({ status: 200, description: 'update employee by id' })
  @ApiOperation({ summary: 'update employee by id' })
  @Put(":id")
  async updateEmployee(@Param("id") id: string, @Body() updateEmployeeDto: PostEmployeesDto) {
    try {
      return this._employeesService.updateEmployee(id, updateEmployeeDto);
    } catch (error) {
      console.error(`Error in update employees: ${error.message}`);
      throw new HttpException('Error in update employees', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @ApiResponse({ status: 200, description: 'delete employee by id' })
  @ApiOperation({ summary: 'delete employee by id' })
  @Delete(":id")
  async removeEmployee(@Param('id') _id: string) {
    try {
      return this._employeesService.deleteEmployee(_id);
    } catch (error) {
      console.error(`Error in delete employees: ${error.message}`);
      throw new HttpException('Error in delete employees', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
