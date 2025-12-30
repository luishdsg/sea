import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

const _postEmployeeService = () => {
  const _fetchEmployee = async (body: EmployeesProps) => {
    try { //process.env.REACT_APP_API_URI não funcionou
      const _resEmplyee = await axios.post(`${process.env.REACT_APP_API_URI}/employees`, body);
      return _resEmplyee.data;
    } catch (error) {
      throw error; 
    }
  };
  return { _fetchEmployee };
};

export default _postEmployeeService

