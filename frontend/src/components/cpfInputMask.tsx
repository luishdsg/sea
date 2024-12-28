import React from 'react';
import { CpfInputMaskProps } from '../shared/interfaces/Props.interface';
import { Input } from 'antd';
import CpfInputFormatation from '../utils/cpfInputFormatation';

const CpfInputMask: React.FC<CpfInputMaskProps>  = ({ value, maxLength, onChange }) => {
      
  return (
      <Input
        type="text"
         pattern="[0-9]*" inputMode="numeric"
        className="border-theme"
        placeholder="CPF"
        value={value}
        onChange={(e) => CpfInputFormatation(e.target.value, onChange)}
        maxLength={maxLength}
      />
  );
};

export default CpfInputMask;
