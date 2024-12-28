import { useState, useEffect } from 'react';
import axios from 'axios';
import { EmployeesProps } from '../shared/interfaces/Props.interface';

let employees: EmployeesProps[] = [];
const _getEmployeesListService = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasGetMorePages, setHasGetMorePages] = useState(true);
  const _fetchEmployeesList = async () => {
    try {
      const _resEmplyeesPage = await axios.get(`http://localhost:3001/employees?_page=${page}`);
      const _req = _resEmplyeesPage.data.data
      if (_req.length === 0 || _req.every((emp: EmployeesProps) => employees.some((e: EmployeesProps) => e.id === emp.id))) {
        setHasGetMorePages(false);
      } else {
        employees = [...employees, ..._resEmplyeesPage.data.data];
        setHasGetMorePages(true);
      }
      setLoading(false);

    } catch (error) {
      setLoading(false);
      return ('Failed to fetch employees');
    }
  };


  const _getNextPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    _fetchEmployeesList();
  }, [page]);

  return { loading,hasGetMorePages, employees, _getNextPage };

};

export default _getEmployeesListService

