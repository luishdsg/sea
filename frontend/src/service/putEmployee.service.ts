import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

const _putEmployeeService = () => {
  const _updateEmployee = async (id:string, body: EmployeesProps) => {
    try { //process.env.REACT_APP_API_URI não funcionou
      const _resEmplyee = await axios.put(`http://localhost:3001/employees/${id}`, body);
      return _resEmplyee.data;
    } catch (error) {
      throw error; 
    }
  };
  return { _updateEmployee };
};

export default _putEmployeeService

