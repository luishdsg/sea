/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import EmployeeListAndTools from "../layouts/employeeListAndTools";
import EmployeeFormAddEdit from "../layouts/employeeFormAddEdit";
import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";
import InfoCard from "../layouts/infoCard";
import TopBar from "../layouts/topBar";

const { Title } = Typography;

const EditEmployeePage: React.FC = () => {
    const [addingOrEditing, setAddingOrEditing] = useState(false);
    const title = ['Funcionário(s)', 'Adicionar Funcionário'];
    const toggleView = () => {
        setAddingOrEditing(!addingOrEditing);
    };
    return (
        <main className="container mb-5">
            <nav>
                <TopBar />
            </nav>
            <Row>
                <Col xs={24} md={9}>
                    <InfoCard />
                </Col>
                <Col xs={24} md={1}></Col>
                <Col xs={24} md={14}>
                    <Row className="bg-light my-3 br2">
                        <Col style={{ borderRadius: '20px 20px 0px 0px' }} className="p-3 bg-theme" span={24}>
                            {addingOrEditing ? (
                                <div onClick={toggleView} className="d-flex cursor w-fit align-items-center"><ArrowLeftOutlined className="pe-3 mb-0 h3 color-light" /> <Title className="color-light mb-0">{title[1]}</Title></div>
                                // <Title className="color-light h3 mb-0">{title[0]}</Title>
                            ) : (
                                <Title className="color-light h3 mb-0">{title[0]}</Title>
                                // <div onClick={toggleView} className="d-flex cursor w-fit align-items-center"><ArrowLeftOutlined className="pe-3 mb-0 h3 color-light" /> <Title className="color-light mb-0">{title[1]}</Title></div>
                            )}
                        </Col>
                        {addingOrEditing ? (
                            // <EmployeeListAndTools onClick={toggleView} /> 
                            <EmployeeFormAddEdit />
                        ) : (
                            // <EmployeeFormAddEdit />
                            <EmployeeListAndTools onClick={toggleView} /> 
                        )}
                    </Row>
                </Col>
            </Row>

        </main>


    );
};

export default EditEmployeePage;
