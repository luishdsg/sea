import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

const _getEmployeeById = () => {
  const _catchEmployee = async (id: string):Promise<EmployeesProps> => {
    try { //process.env.REACT_APP_API_URI não funcionou
      const _resEmplyee = await axios.get(`${process.env.REACT_APP_API_URI}/employees/${id}`);
      console.log('byid = ',_resEmplyee.data)
      return _resEmplyee.data;
    } catch (error) {
      throw error; 
    }
  };
  return { _catchEmployee };
};

export default _getEmployeeById

