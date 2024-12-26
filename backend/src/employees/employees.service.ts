import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  private employees = [];

  findAll() {
    return this.employees;
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

  delete(id: number) {
    const employeeIndex = this.employees.findIndex((e) => e.id === id);
    if (employeeIndex > -1) {
      this.employees.splice(employeeIndex, 1);
      return true;
    }
    return false;
  }
}
