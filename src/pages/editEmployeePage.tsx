/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, Typography } from "antd";
import EmployeeListAndTools from "../components/employeeListAndTools";

const { Title } = Typography;

const EditEmployeePage: React.FC = () => {
    return (
        <>
            <Row>
                <Col style={{ borderRadius: '20px 20px 0px 0px' }} className="p-3 bg-info" span={24}>
                    <Title level={4}> Funcionário(s)</Title> 
                </Col>
               <EditEmployeePage/>
               <EmployeeListAndTools/>
            </Row>
        </>
    );
};

export default EditEmployeePage;
