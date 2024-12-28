import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

const _putEmployeeService = () => {
  const _fetchEmployee = async (id:string, body: EmployeesProps) => {
    try {
      const _resEmplyee = await axios.put(`http://localhost:3001/employees/${id}`, body);
      return _resEmplyee.data;
    } catch (error) {
      throw error; 
    }
  };


  return { _fetchEmployee };

};

export default _putEmployeeService

