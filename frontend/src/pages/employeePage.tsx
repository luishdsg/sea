import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import EmployeeFormAddEdit from "../layouts/employeeFormAddEdit.layout";
import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";
import InfoCard from "../layouts/infoCard.layout";
import TopBar from "../layouts/topBar.layout";
import EmployeesListView from "../layouts/employeesListView";
import StepPage from "./employeeStepPage";

const { Title } = Typography;

const EmployeePage: React.FC = () => {
    const [EmployeePage, setEmployeePage] = useState(false);
    const [stepTopBarEnabled, setStepTopBarEnabled] = useState(false);
    const [getById, setGetById] = useState("");
    const [indexStepPage, setIndexStepPage] = useState(1);
    const title = ['Funcionário(as)', 'Adicionar Funcionário'];

    // ativar steps (topbar) - salvar estado no localStorage
    const _toggleStepEnabled = (value: boolean) => setStepTopBarEnabled(value);
    const _toggleEmployeePagesView = () =>  {localStorage.setItem('switchEnable', JSON.stringify(!EmployeePage)); setEmployeePage(!EmployeePage);}
    

    return (
        <main className="container  overflow-y-scroll overflow-x-hidden my-5 pb-5 h100vh">
            <nav>
                <TopBar indexStepPage={setIndexStepPage} stepTopBarEnabled={stepTopBarEnabled} />
            </nav>
            {indexStepPage === 1 ? (
                <Row className="mb-5  pb-5">
                    <Col xs={24} md={9}>
                        <InfoCard />
                    </Col>
                    <Col xs={24} md={1}></Col>
                    <Col xs={24} md={14}>
                        <Row className="bg-light my-3 br2">
                            <Col style={{ borderRadius: '20px 20px 0px 0px' }} className="p-3 bg-theme" span={24}>
                                {EmployeePage ? (
                                    <div onClick={() => { _toggleEmployeePagesView(); _toggleStepEnabled(false); }} className="d-flex cursor w-fit align-items-center"><ArrowLeftOutlined className="pe-3 mb-0 h3 color-light" /> <Title className="color-light mb-0">{title[1]}</Title></div>
                                ) : (
                                    <Title className="color-light h3 mb-0">{title[0]}</Title>
                                )}
                            </Col>
                            {EmployeePage ? (
                                <EmployeeFormAddEdit id={getById}/>
                            ) : (
                                <EmployeesListView
                                    onClick={_toggleEmployeePagesView}
                                    onToggleStepEnabled={_toggleStepEnabled}
                                    onId={setGetById}
                                />
                            )}
                        </Row>
                    </Col>
                </Row>
            ) : (
                <StepPage step={indexStepPage} />
            )}
        </main>
    );
};

export default EmployeePage;
