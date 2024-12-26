import React from 'react';
import { BtnDefaultPatternProps } from '../interfaces/Props.interface';

const BtnDefaultPattern: React.FC<BtnDefaultPatternProps> = ({type, styleClass, content, onClick }) => (
  <button onClick={onClick} 
  type={type} 
  className={`py-2 outline btnDefaultPattern br1 w-100 ${styleClass}`}
  >
    {content}
  </button>
);

export default BtnDefaultPattern;
