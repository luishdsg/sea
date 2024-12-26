
interface SidebarButtonProps {
  icon: React.ReactNode;
  buttonKey: string;
  isActive: boolean;
  onHoverKey: string | null;
  setOnHoverKey: (key: string | null) => void;
  onClick: (key: string) => void;
}

interface TopBarProps {
}
interface InputRadioGenderDefaultProps {
  gender: string;
  genderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SwitchDefaultPatternProps {
  on: string;
  off: string;
  checked: boolean;
  onChange: (checked: boolean) => void
}

interface BtnDefaultPatternProps {
  content?: string | null;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLElement>;
  styleClass?: string | null;
}

interface InputDefaultPatternProps {
  placeholder?: string | undefined;
}
interface CpfInputMaskProps {
  value: string;
  maxLength: number;
  onChange: (value: string) => void;
}

interface EmployeeListAndToolsProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}
export type {
  EmployeeListAndToolsProps,
  SwitchDefaultPatternProps,
  InputDefaultPatternProps,
  BtnDefaultPatternProps,
  CpfInputMaskProps,
  SidebarButtonProps,
  InputRadioGenderDefaultProps,
  TopBarProps
};