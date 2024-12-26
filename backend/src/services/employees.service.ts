import axios from 'axios';
import { EmployeeModel } from 'src/models/employees.models';

const API_URL = 'http://localhost:3000/funcionarios';

export const FuncionarioService = {
  getAll: async (): Promise<EmployeeModel[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getById: async (id: number): Promise<EmployeeModel> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  create: async (funcionario: EmployeeModel): Promise<EmployeeModel> => {
    const response = await axios.post(API_URL, funcionario);
    return response.data;
  },

  update: async (
    id: number,
    funcionario: EmployeeModel
  ): Promise<EmployeeModel> => {
    const response = await axios.put(`${API_URL}/${id}`, funcionario);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
