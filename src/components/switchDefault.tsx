import React from 'react';
import { SwitchDefaultPatternProps } from '../interfaces/Props.interface';

const SwitchDefaultPattern: React.FC<SwitchDefaultPatternProps> = ({ checked, onChange }) => {
    return (
        <div
            className={`custom-switch ${checked ? 'checked' : ''}`}
            onClick={() => onChange(!checked)}
        >
            <span className="switch-handle"></span>
            <span className="switch-label">{checked ? 'Ativo' : <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inativo</>}</span>
        </div>
    );
};

export default SwitchDefaultPattern;