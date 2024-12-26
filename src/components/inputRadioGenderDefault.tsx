
import React from 'react';
import { InputRadioGenderDefaultProps } from '../interfaces/Props.interface';

const InputRadioGenderDefault: React.FC<InputRadioGenderDefaultProps> = ({ genderChange, gender }) => {
    return (
        <div className="form-group">
            <div className="d-flex align-items-center">
                <div className="form-check me-3">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={gender === 'male'}
                        onChange={genderChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Masculino
                    </label>
                </div>
                <div className="form-check me-3">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={gender === 'female'}
                        onChange={genderChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Feminino
                    </label>
                </div>
            </div>
        </div>
    );
};

export default InputRadioGenderDefault;