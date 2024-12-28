import React, { useEffect, useState } from 'react';
import { Col, Dropdown, Flex, MenuProps, Modal, Row, Skeleton, Space, Typography, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import BtnDefaultPattern from './btnDefault';
import _getEmployeesList from '../service/getEmployeesList.service';
import { formatCPF } from '../utils/cpfFormatation';
import _deleteEmployeeService from '../service/deleteEmployee.service';
import { EmployeesListViewProps, EmployeesProps } from '../shared/interfaces/Props.interface';
import SwitchDefaultPattern from './switchDefault';

const { Title, Text } = Typography;

const EmployeesListView: React.FC<EmployeesListViewProps> = ({ onClick, onToggleStepEnabled }) => {
    const { loading, hasGetMorePages, employees, _getNextPage } = _getEmployeesList();
    const [switchEnable, setSwitchEnable] = useState<boolean>(() => {
        const savedValue = localStorage.getItem('switchEnable');
        return savedValue ? JSON.parse(savedValue) : false;
    });
    const [open, setOpen] = React.useState<boolean>(false);
    const [employeesList, setEmployeesList] = useState<EmployeesProps[]>([]);
    const [isChecked, setIsChecked] = useState(switchEnable);

    useEffect(() => {
            setEmployeesList(employees);
            localStorage.setItem('switchEnable', JSON.stringify(switchEnable));
    }, [employees,switchEnable]);


    if (loading) return <Skeleton className='px-4' active />;
    const _handleDeleteEmployee = async (id: number) => {
        try {
            const updatedEmployees = await _deleteEmployeeService(id);
            if (updatedEmployees) {
                const element = document.getElementById(`employee-${id}`);
                if (element) element.classList.add('fade-out');
                setTimeout(async () => {
                    if (element) element.classList.add('d-none');
                    employeesList.filter((employee) => employee.id !== id);
                }, 500);
            }
        } catch (error) {
            alert('Erro ao deletar funcionário. Tente novamente.');
        }
    };

    const _handleFilterActive = () => setEmployeesList(employees.filter((item) => item.active === true));
    const _handleClearFilter = () => setEmployeesList(employees);
    const _handleNextSteps = (e: boolean) =>  onToggleStepEnabled?.(e); 
    const _toggleswitchEnable = () => setSwitchEnable((prev) => !prev);

    const itemsDropdown = (id: any): MenuProps['items'] => [
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
            onClick: () => { _handleDeleteEmployee(id); setOpen(true); }
        },
    ];


    return (
        <>
            <Row>
                <Col span={24}>
                    <Row className="p-4">
                        <Col className="pb-4" span={24}>
                            <Flex gap="large" wrap>
                                <Button onClick={(e) => {_handleNextSteps(true); onClick?.(e)}} className="py-4 w-100 br1 color-theme border-theme">+ Adicionar Funcionário</Button>
                            </Flex>
                        </Col>
                        <Col className="pe-2 truncate" span={9}>
                            <BtnDefaultPattern onClick={_handleFilterActive} styleClass="border-theme color-theme" content="Ver apenas ativos" />
                        </Col>
                        <Col className="ps-2" span={8}>
                            <BtnDefaultPattern onClick={_handleClearFilter}styleClass="border text-secondary border-secondary " content="Limpar filtros" />
                        </Col>
                        <Col className="text-end align-content-end" span={6}>
                            <Text>Ativos {employeesList.filter((e) => e.active).length}/{employees.length}</Text>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row className="employee-list">
                        {employeesList.map((employee) => (
                            <Col id={`employee-${employee?.id}`} key={employee?.id} className="employee-item ps-4 pe-2 py-2" span={24}>
                                <Row className={`${employee?.active ? 'bg-active' : 'bg-inactive'} d-flex br2`}>
                                    <Col xs={21} md={22}>
                                        <Row>
                                            <Col span={24}>
                                                <Row>
                                                    <Col className="pt-3 px-3" span={24}>
                                                        <Title level={4}>{employee?.name}</Title>
                                                    </Col>
                                                </Row>
                                                <Row className="pb-3 px-3" >
                                                    <Col className="mt-2">
                                                        <Text className="bg-theme color-light text-center br2 px-3 py-1">{formatCPF(employee?.cpf)}</Text>
                                                    </Col>
                                                    <Col className="mt-2">
                                                        <Text className="m-2 bg-theme color-light text-center br2 px-3 py-1">{employee?.active ? 'Ativo' : 'Inativo'}</Text>
                                                    </Col>
                                                    <Col className="mt-2">
                                                        <Text className="bg-theme color-light text-center br2 px-3 py-1">{employee?.position}</Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={3} md={2}className="bg-theme" style={{ borderRadius: '0px 20px 20px 0px' }}>
                                        <Dropdown
                                            menu={{ items: itemsDropdown(employee?.id) }}
                                            trigger={['click']}>
                                            <span className="d-flex align-content-center cursor justify-content-center h-100 px-2" onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                    <MoreOutlined className='MoreOutlined' />
                                                </Space>
                                            </span>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                        {!hasGetMorePages && (
                            <BtnDefaultPattern onClick={_getNextPage} styleClass={'mx-5 color-theme border-theme'} content={"carregar mais..."} />
                        )}
                    </Row>
                </Col>
                <Col className="px-4 py-2 d-flex justify-content-end" span={24}>
                    <Text className="px-2 mt-1 ">A etapa está concluída?</Text>
                    <Space direction="vertical">
                        <SwitchDefaultPattern on={'Sim'} off={'Não'} checked={isChecked} onChange={(e) => {_toggleswitchEnable(); setIsChecked(e); _handleNextSteps(e);}}/>
                    </Space>
                </Col>
            </Row>
            {/* modal-delete-user */}
            <Modal
                centered
                className='br2'
                open={open}
                onCancel={() => setOpen(false)}
            >
                <Title level={4}>Usuário Excluido com sucesso! 👍</Title>
                <Row><Col className='d-flex justify-content-center align-content-center' span={24}><Text onClick={() => setOpen(false)} className='br3 px-2 py-1 bg-light cursor color-theme'>Ok</Text></Col></Row>
            </Modal>

        </>
    );
};

export default EmployeesListView;
