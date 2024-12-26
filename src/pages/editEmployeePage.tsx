/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import EmployeeListAndTools from "../components/employeeListAndTools";
import EmployeeFormAddEdit from "../components/employeeFormAddEdit";
import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";

const { Title } = Typography;

const EditEmployeePage: React.FC = () => {
    const [addingOrEditing, setAddingOrEditing] = useState(false);
    const title = [ 'Funcionário(s)' , 'Adicionar Funcionário' ];
    const toggleView = () => {
        setAddingOrEditing(!addingOrEditing);
    };
    return (
            <Row className="bg-light br2">
                <Col style={{ borderRadius: '20px 20px 0px 0px' }} className="p-3 bg-theme" span={24}>
                    {addingOrEditing ? (
                        <Title className="color-light h3 mb-0">{title[0]}</Title>
                    ) : (
                        <div onClick={toggleView} className="d-flex cursor w-fit align-items-center"><ArrowLeftOutlined className="pe-3 mb-0 h3 color-light" /> <Title className="color-light mb-0">{title[1]}</Title></div>
                    )}
                </Col>
                {addingOrEditing ? (
                    <EmployeeListAndTools onClick={toggleView}  />
                ) : (
                    <EmployeeFormAddEdit />
                )}
            </Row>
    );
};

export default EditEmployeePage;
