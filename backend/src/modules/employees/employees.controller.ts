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

@Get(":id")
findOne(@Param("id") id: string) {
  return this._employeesService.findOne(+id);
}

@ApiResponse({ status: 200, description: 'create employees' })
@ApiOperation({ summary: 'create employees' })
@Post()
async createEmployee(@Body() createEmployeeDto: PostEmployeesDto) {
  try {
    console.info(createEmployeeDto);
    return this._employeesService.createEmployee(createEmployeeDto);
  } catch (error) {
    console.error(`Error in create employees: ${error.message}`);
    throw new HttpException('Error in create employees', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

@Put(":id")
update(@Param("id") id: string, @Body() updateEmployeeDto: any) {
  return this._employeesService.update(+id, updateEmployeeDto);
}

@ApiResponse({ status: 200, description: 'delete employee by id' })
@ApiOperation({ summary: 'delete employee by id' })
@Delete(":id")
async getAllEmploremoveEmployeeyees(@Param('id') _id: number) {
  try {
    return this._employeesService.deleteEmployee(_id);
  } catch (error) {
    console.error(`Error in delete employees: ${error.message}`);
    throw new HttpException('Error in delete employees', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
}
