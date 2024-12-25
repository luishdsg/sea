/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, Typography, Button, Flex, Dropdown, Space, MenuProps, Switch } from "antd";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";

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

const EmployeeListAndTools: React.FC = () => {
    return (
            <Row>
                <Col span={24}>
                    <Row className="p-4">
                        <Col className="pb-4" span={24}>
                            <Flex gap="large" wrap>
                                <Button className="w-100 border outline py-5 d-inline" color="primary" variant="outlined">
                                    <PlusOutlined className="px-3" />  Adicionar Funcionário
                                </Button>
                            </Flex>
                        </Col>
                        <Col className="pe-2" span={7}>
                            <Button color="primary" className="w-100" variant="outlined">
                                Ver apenas ativos
                            </Button>
                        </Col>
                        <Col className="ps-2" span={7}>
                            <Button color="default" className="w-100" variant="outlined">
                                Limpar filtros
                            </Button>
                        </Col>
                        <Col className=" text-end align-content-end" span={10}>
                            <Text>Ativos 2/4</Text>
                        </Col>
                    </Row>
                </Col>
                <Col className="px-4 py-2" span={24}>
                    <Row className="d-flex bg-inactive br2">
                        <Col span={22}>
                            <Row>
                                <Col span={24}>
                                    <Row>
                                        <Col className="pt-3 px-3" span={24}>
                                            <Title level={4}>Daniel Alves da Silva</Title>
                                        </Col>
                                    </Row>

                                    <Row className="pb-3 px-3" >
                                        <Col >
                                            <Text className="bg-theme color-light text-center br2 px-3 py-1"> 234.234.234-23</Text>
                                        </Col>
                                        <Col>
                                            <Text className="m-2 bg-theme color-light text-center br2 px-3 py-1"> ativo</Text>
                                        </Col>
                                        <Col>
                                            <Text className="bg-theme color-light text-center br2 px-3 py-1">cargo-2 </Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="bg-theme" style={{ borderRadius: '0px 20px 20px 0px' }} span={2}>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a className="d-block align-content-center h-100 px-2" onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <MoreOutlined className='MoreOutlined' />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
                <Col className="px-4 py-2" span={24}>
                    <Row className="d-flex bg-inactive br2">
                        <Col span={22}>
                            <Row>
                                <Col span={24}>
                                    <Row>
                                        <Col className="pt-3 px-3" span={24}>
                                            <Title level={4}>Daniel Alves da Silva</Title>
                                        </Col>
                                    </Row>
                                    <Row className="pb-3 px-3" >
                                        <Col >
                                            <Text className="bg-theme color-light text-center br2 px-3 py-1"> 234.234.234-23</Text>
                                        </Col>
                                        <Col>
                                            <Text className="m-2 bg-theme color-light text-center br2 px-3 py-1"> ativo</Text>
                                        </Col>
                                        <Col>
                                            <Text className="bg-theme color-light text-center br2 px-3 py-1">cargo-2 </Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="bg-theme" style={{ borderRadius: '0px 20px 20px 0px' }} span={2}>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a className="d-block align-content-center h-100 px-2" onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <MoreOutlined className='MoreOutlined' />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
                <Col className="px-4 py-2 d-flex justify-content-end" span={24}>
                    <Text className="px-2 ">A etapa está concluída?</Text>
                    <Space direction="vertical">
                        <Switch checkedChildren="Sim" unCheckedChildren="Não"/>
                    </Space>
                </Col>
            </Row>
    );
};

export default EmployeeListAndTools;
