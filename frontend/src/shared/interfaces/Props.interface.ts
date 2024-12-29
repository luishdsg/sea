import { EmployeesGender } from "../enum/employees-gender.enum";

interface SidebarButtonProps {
  icon: React.ReactNode;
  buttonKey: string;
  isActive: boolean | null;
  onHoverKey: string | null;
  setOnHoverKey: React.Dispatch<React.SetStateAction<string | null>>;
  onClick: (key: string) => void;
}

interface EPIAtivity {
  EPIactivity: string;
  EPIepi: string;
  EPIca: string;
}

interface ComingSoonProps{
  title: string
}

interface EmployeesProps {
  id?: string;
  active: boolean;
  name: string;
  gender: EmployeesGender;
  cpf: string;
  birthdayDate: any;
  rg: string;
  role: string;
  EPI: boolean;
  EPIactivities?: EPIAtivity[];
  healthCertificate?: File | undefined;
}

interface TopBarProps {
  stepTopBarEnabled: boolean;
  indexStepPage: React.Dispatch<React.SetStateAction<number>>;
}
interface StepPageProps {
  step: number;
}
interface FloatBtnSideBarMobileProps {
  onClick?: () => void;

}
interface InputRadioGenderDefaultProps {
  gender: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SwitchDefaultPatternProps {
  on: string;
  off: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

interface BtnDefaultPatternProps {
  content?: string | null;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: React.MouseEventHandler<HTMLElement>;
  styleClass?: string | null;
}

interface InputDefaultPatternProps {
  placeholder?: string | undefined;
}
interface CpfInputMaskProps {
  value?: string;
  maxLength: number;
  onChange: (value: string) => void;
}

interface EmployeeFormAddEditProps{
  id?: string;
  onToggleEditForm?: boolean;

}

interface EmployeesListViewProps {
  onId?: (value: string) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onToggleStepEnabled?: (value: boolean) => void;
  onFilterActive?: () => void;
  onClearFilter?: () => void;
  onToggleEditForm?: (value: boolean) => void;

}
export type {
  SwitchDefaultPatternProps,
  InputDefaultPatternProps,
  BtnDefaultPatternProps,
  CpfInputMaskProps,
  SidebarButtonProps,
  InputRadioGenderDefaultProps,
  TopBarProps,
  FloatBtnSideBarMobileProps,
  EmployeesListViewProps,
  EmployeesProps,
  StepPageProps,
  ComingSoonProps,
  EmployeeFormAddEditProps,
  EPIAtivity,

};