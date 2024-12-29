import axios from 'axios';


const _deleteEmployeeService = async (id: string) => {
  try { //process.env.REACT_APP_API_URI não funcionou
    let updatedEmployees = await axios.delete(`http://localhost:3001/employees/${id}`)
    if(updatedEmployees) return true;
  } catch (error) {
    throw error;
  }
};

export default _deleteEmployeeService;
