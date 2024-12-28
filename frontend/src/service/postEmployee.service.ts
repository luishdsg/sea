import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

const _postEmployeeService = () => {
  const _fetchEmployee = async (body: EmployeesProps) => {
    try {
      const _resEmplyee = await axios.post(`http://localhost:3001/employees`, body);
      return _resEmplyee.data;
    } catch (error) {
      throw error; 
    }
  };


  return { _fetchEmployee };

};

export default _postEmployeeService

