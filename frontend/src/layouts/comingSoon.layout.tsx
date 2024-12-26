import React from 'react';
import { Row, Col, Tooltip } from "antd";
import BtnDefaultPattern from '../components/btnDefault';


const ComingSoon: React.FC = () => {
    return (
        <Row className='p-3 bg-inactive h100vh'>
            <Col span={24}>
                <Tooltip title="ainda não está pronto agarde">
                    <span>
                        <BtnDefaultPattern styleClass="border-theme h3 text-light bg-theme" content="Em breve" />
                    </span>

                </Tooltip>
            </Col>
        </Row>
    );
};

export default ComingSoon;
