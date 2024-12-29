import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

const _getEmployeeById = () => {
  const _catchEmployee = async (id: string):Promise<EmployeesProps> => {
    try {
      const _resEmplyee = await axios.get(`http://localhost:3001/employees/${id}`);
      console.log('byid = ',_resEmplyee.data)
      return _resEmplyee.data;
    } catch (error) {
      throw error; 
    }
  };


  return { _catchEmployee };

};

export default _getEmployeeById

