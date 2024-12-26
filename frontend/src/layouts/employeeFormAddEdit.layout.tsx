import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Typography, Flex } from "antd";
import SwitchDefaultPattern from '../components/switchDefault';
import InputRadioGenderDefault from '../components/inputRadioGenderDefault';
import CpfInputMask from '../components/cpfInputMask';
import BtnDefaultPattern from '../components/btnDefault';
import FileUpload from '../components/inputFileDefault';
import { useMediaQuery } from '@react-hook/media-query';


const { Option } = Select;

const { Text } = Typography;

const EmployeeFormAddEdit: React.FC = () => {
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [cpf, setcpf] = useState<string>("");
  const [gender, setGender] = useState<string>('male');
  const isMobile = useMediaQuery('(max-width: 992px)');


  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };
  const genderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };


  return (
    <div>
      <Form
        className='my-3 px-4 mx-4'
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          isActive: true,
          gender: "Masculino",
        }}
      >
        <Row gutter={16}>
          <Col span={24} className='border-theme shadow mb-0 br1'>
            <Form.Item className='my-1'>
              <Row align="middle" justify="space-between" gutter={16}>
                <Col  className='d-flex justify-content-start'  span={15}>
                  <Text>O trabalhador está ativo ou inativo?</Text>
                </Col>
                <Col className='d-flex justify-content-end' span={7}>
                  <Form.Item name="isActive" valuePropName="checked" noStyle>
                    <SwitchDefaultPattern on={'Ativo'} off={'Inativo'} checked={isChecked} onChange={setIsChecked} />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

          </Col>
          <Row className='border-theme shadow p-2 mb-0 mt-3 br1'>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item label="Nome" name="name" rules={[{ required: true, message: "Por favor, insira o nome!" }]}>
                <Input className='border-theme text-dark' maxLength={50} placeholder="Nome" />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item
                label="Sexo"
                name="gender"
                rules={[{ required: true, message: "Por favor, selecione o sexo!" }]}
              >
                <InputRadioGenderDefault genderChange={genderChange} gender={gender} />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: "Por favor, insira o CPF!" }]}>
                <CpfInputMask
                  value={cpf}
                  onChange={setcpf}
                  maxLength={14}
                />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item
                label="Data de Nascimento"
                name="birthdate"
                className='truncate'
                rules={[{ required: true, message: "Por favor, insira a data de nascimento!" }]}
              >
                <Input  className='border-theme text-dark' type="date" />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item label="RG" name="rg" rules={[{ required: true, message: "Por favor, insira o RG!" }]}>
                <Input placeholder="RG" type='text' pattern="[0-9]*" inputMode="numeric" className='border-theme' maxLength={7} />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item label="Cargo" name="role" rules={[{ required: true, message: "Por favor, insira o cargo!" }]}>
                <Select  className='input-select-default text-dark'>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row className='border-theme shadow p-2 mb-0 mt-3 br1'>
            <Col className='px-2' span={24}>
              <Form.Item name="noEpi" valuePropName="checked">
                <div className="form-check">
                  <Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      O trabalhador não usa EPI.
                    </label>
                </div>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row className='border-theme shadow mx-2 p-2 mb-0 br1'>
                <Col className='px-2' span={24}>
                  <Form.Item label="Selecione a atividade:" name="activity">
                    <Select className='input-select-default text-dark' placeholder="Selecione uma atividade">
                      <Option value="atividade1">Atividade 1</Option>
                      <Option value="atividade2">Atividade 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className='px-2' span={isMobile ? 24 : 8} >
                  <Form.Item label="Selecione o EPI" name="epi">
                    <Select className='input-select-default text-dark' placeholder="Selecione o EPI">
                      <Option value="calcadoSeguranca">Calçado de Segurança</Option>
                      <Option value="capacete">Capacete</Option>
                    </Select>
                  </Form.Item>
                </Col>
              
                <Col className='px-2' span={isMobile ? 24 : 8} >
                  <Form.Item
                  
                    label="Informe o número do CA"
                    name="caNumber"
                  >
                    <Input maxLength={4} className=' border-theme' placeholder="Número do CA" />
                  </Form.Item>
                </Col>
                <Col className='px-2 align-content-center' span={isMobile ? 24 : 8} >
                  <Form.Item className='mb-0'>
                    <Flex gap="large" wrap>
                      <BtnDefaultPattern type={'submit'} styleClass="color-theme border-theme" content="Adicionar EPI" />
                    </Flex>
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col className='px-2 mt-4' span={24}>
              <Form.Item>
                <Flex gap="large" wrap>
                  <BtnDefaultPattern type={'submit'} styleClass="p-2 color-theme border-theme" content="Adicionar outra atividade" />
                </Flex>
              </Form.Item>
            </Col>

          </Row>
          <Col className='px-0' span={24}>
            <Row className='border-theme shadow mt-4 p-3 br1'>
              <Col span={24}>
                <Text>Adicione Atestado de Saúde (opcional)</Text>
                <Form.Item name="healthCertificate">
                  <FileUpload />
                </Form.Item>
              </Col>
            </Row>
            <Col className='px-0 mt-4' span={24}>
              <Flex gap="large" wrap>
                <BtnDefaultPattern type={'submit'} styleClass="p-2 color-theme border-theme" content="Salvar" />
              </Flex>
            </Col>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EmployeeFormAddEdit;
