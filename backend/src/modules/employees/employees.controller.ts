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
import { EmployeesDto } from "src/shared/interfaces/employees.interface";

@ApiTags('get')
@Controller("employees")
export class _EmployeesController {
  constructor(private readonly _employeesService: EmployeesService) { }

  @ApiResponse({ status: 200, description: 'get all employees' })
  @ApiOperation({ summary: 'get all employees' })
  @Get()
  async getAllEmployees(@Query('_page') page: number = 1)
  : Promise<EmployeesDto[]> {
    try {
      return this._employeesService.findAllPerPage(page);
    } catch (error) {
      console.error(`Error in get employees per page: ${error.message}`);
      throw new HttpException('Error getPostComments post', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

@Get(":id")
findOne(@Param("id") id: string) {
  return this._employeesService.findOne(+id);
}

@Post()
create(@Body() createEmployeeDto: any) {
  return this._employeesService.create(createEmployeeDto);
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
    console.error(`Error in get employees per page: ${error.message}`);
    throw new HttpException('Error getPostComments post', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
}
