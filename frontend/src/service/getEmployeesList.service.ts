import { useState, useEffect } from 'react';
import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

let employees: EmployeesProps[] = [];
const _getEmployeesListService = () => {
  const [loading, setLoading] = useState(true);
  const _catchEmployeesList = async () => {
    try { //process.env.REACT_APP_API_URI não funcionou
      const _resEmplyeesPage = await axios.get(`http://localhost:3001/employees`);
      const _req = _resEmplyeesPage.data
        employees = _req
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error; 
    }
  };
  useEffect(() => {
    _catchEmployeesList();
  }, []);
  return { loading, employees };
};

export default _getEmployeesListService

