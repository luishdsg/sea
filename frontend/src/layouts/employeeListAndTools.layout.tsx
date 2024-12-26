/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Typography, Flex, Dropdown, Space, MenuProps, Switch } from "antd";
import MoreOutlined from "@ant-design/icons/MoreOutlined";
import BtnDefaultPattern from "../components/btnDefault";
import { EmployeeListAndToolsProps } from "../interfaces/Props.interface";
import SwitchDefaultPattern from "../components/switchDefault";

const items: MenuProps['items'] = [
    {
        label: 'Alterar',
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: 'Excluir',
        key: '1',
    },
];
const { Title, Text } = Typography;

const EmployeeListAndTools: React.FC<EmployeeListAndToolsProps> = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

    return (
        <Row>
            <Col span={24}>
                <Row className="p-4">
                    <Col className="pb-4" span={24}>
                        <Flex gap="large" wrap>
                            <BtnDefaultPattern onClick={onClick} styleClass="py-4 color-theme border-theme" content="+ Adicionar Funcionário" />
                        </Flex>
                    </Col>
                    <Col className="pe-2 truncate" span={9}>
                        <BtnDefaultPattern styleClass="border-theme color-theme" content="Ver apenas ativos" />
                    </Col>
                    <Col className="ps-2" span={8}>
                        <BtnDefaultPattern styleClass="border text-secondary border-secondary " content="Limpar filtros" />
                    </Col>
                    <Col className="text-end align-content-end" span={6}>
                        <Text>Ativos 2/4</Text>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row className="employee-list">
                    <Col className="px-4 py-2" span={24}>
                        <Row className="d-flex bg-inactive br2">
                            <Col span={21}>
                                <Row>
                                    <Col span={24}>
                                        <Row>
                                            <Col className="pt-3 px-3" span={24}>
                                                <Title level={4}>Daniel Alves da Silva</Title>
                                            </Col>
                                        </Row>
                                        <Row className="pb-3 px-3" >
                                            <Col className="mt-2">
                                                <Text className="bg-theme color-light text-center br2 px-3 py-1"> 234.234.234-23</Text>
                                            </Col>
                                            <Col className="mt-2">
                                                <Text className="m-2 bg-theme color-light text-center br2 px-3 py-1"> ativo</Text>
                                            </Col>
                                            <Col className="mt-2">
                                                <Text className="bg-theme color-light text-center br2 px-3 py-1">cargo-2 </Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col  span={3} className="bg-theme" style={{ borderRadius: '0px 20px 20px 0px' }}>
                                <Dropdown menu={{ items }} trigger={['click']}>
                                    <a className="d-flex align-content-center  justify-content-center h-100 px-2" onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <MoreOutlined className='MoreOutlined' />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

            <Col className="px-4 py-2 d-flex justify-content-end" span={24}>
                <Text className="px-2 ">A etapa está concluída?</Text>
                <Space direction="vertical">
                <SwitchDefaultPattern on={'Sim'} off={'Não'} checked={isChecked} onChange={setIsChecked} />

                </Space>
            </Col>
        </Row>
    );
};

export default EmployeeListAndTools;
