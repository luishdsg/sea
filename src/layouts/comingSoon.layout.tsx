import React from 'react';
import { Row, Col, Tooltip } from "antd";
import BtnDefaultPattern from '../components/btnDefault';
import { ComingSoonProps } from '../shared/interfaces/Props.interface';


const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
    return (
        <Row className='p-3 bg-light h100vh'>
            <Col span={24}>
                <Tooltip title={title}>
                    <span>
                        <BtnDefaultPattern onClick={()=>{}} styleClass="border-theme h3 text-light bg-theme" content="Em breve" />
                    </span>

                </Tooltip>
            </Col>
        </Row>
    );
};

export default ComingSoon;
