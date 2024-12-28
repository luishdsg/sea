import axios from 'axios';


const _deleteEmployeeService = async (id: string) => {
  try {
    let updatedEmployees = await axios.delete(`http://localhost:3001/employees/${id}`)
    if(updatedEmployees) return true;
  } catch (error) {
    console.error('Erro ao delete employee:', error);
    throw error;
  }
};

export default _deleteEmployeeService;
