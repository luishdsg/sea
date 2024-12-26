
import React from 'react';
import { InputRadioGenderDefaultProps } from '../interfaces/Props.interface';
import { Col, Row } from 'antd';
import { useMediaQuery } from '@react-hook/media-query';

const InputRadioGenderDefault: React.FC<InputRadioGenderDefaultProps> = ({ genderChange, gender }) => {
    const isMobile = useMediaQuery('(max-width: 992px)');
    return (
            <Row className="=d-flex align-items-center">
                <Col span={isMobile ? 24 : 12} className="form-check">
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
                </Col>
                <Col span={isMobile ? 24 : 12} className="form-check">
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
                </Col>
            </Row>
    );
};

export default InputRadioGenderDefault;