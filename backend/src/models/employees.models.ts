export interface EPIAtivity {
  atividade: string;
  epi: string;
  ca: string;
}

export interface EmployeeModel {
  id?: number;
  ativo: boolean;
  nome: string;
  sexo: string;
  cpf: string;
  dataDeNascimento: string;
  rg: string;
  cargo: string;
  EPI: boolean;
  EPIatividades: EPIAtivity[];
}
