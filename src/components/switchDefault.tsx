import React from 'react';
import { SwitchDefaultPatternProps } from '../interfaces/Props.interface';

const SwitchDefaultPattern: React.FC<SwitchDefaultPatternProps> = ({on, off ,checked, onChange }) => {
    return (
        <div
            className={`custom-switch ${checked ? 'checked' : ''}`}
            onClick={() => onChange(!checked)}
        >
            <span className="switch-handle"></span>
            <span className="switch-label">{checked ? `${on}` : <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{off}</>}</span>
        </div>
    );
};

export default SwitchDefaultPattern;