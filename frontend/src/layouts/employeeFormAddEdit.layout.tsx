import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Row, Col, Typography, Flex, Button, DatePicker } from "antd";
import SwitchDefaultPattern from '../components/switchDefault';
import InputRadioGenderDefault from '../components/inputRadioGenderDefault';
import CpfInputMask from '../components/cpfInputMask';
import BtnDefaultPattern from '../components/btnDefault';
import FileUpload from '../components/inputFileDefault';
import { useMediaQuery } from '@react-hook/media-query';
import { EmployeeFormAddEditProps, EmployeesProps, EPIAtivity } from '../shared/interfaces/Props.interface';
import _postEmployeeService from '../service/postEmployee.service';
import { EmployeesGender } from '../shared/enum/employees-gender.enum';
import _optionsEmployeeForm from '../utils/optionsEmployeeForm';
import _getEmployeeById from '../service/getByIdEmployee.service';
import moment from 'moment';
import { DeleteOutlined } from '@ant-design/icons';
import _putEmployeeService from '../service/putEmployee.service';


const { Text } = Typography;

const EmployeeFormAddEdit: React.FC<EmployeeFormAddEditProps> = ({ id }) => {
  const [form] = Form.useForm();
  const { _fetchEmployee } = _postEmployeeService();
  const { _catchEmployee } = _getEmployeeById();
  const { _updateEmployee } = _putEmployeeService();
  const { optionrole, optionEpi, optionEpiActivity } = _optionsEmployeeForm();
  const [epiFormActivate, setEpiFormActivate] = useState(false);
  const [epiActivities, setEpiActivities] = useState<EPIAtivity[]>([]);
  const [releaseEPI, setReleaseEPI] = useState(false);
  const [btnsEPI, setBtnsEPI] = useState(false);
  const [active, setActive] = useState(false);
  const [epi, setEpi] = useState(false);
  const [cpf, setcpf] = useState<string>("");
  const [gender, setGender] = useState<string>('male');
  const isMobile = useMediaQuery('(max-width: 992px)');


  useEffect(() => {
    if (id) {
      const loadEmployeeData = async () => {
        try {
          const employeeData = await _catchEmployee(id);
          employeeData.birthdayDate = moment(employeeData.birthdayDate, "YYYY-MM-DD");
          form.setFieldsValue(employeeData);
          setGender(employeeData.gender)
          console.log('É ESSE ', employeeData)
          setReleaseEPI(true)
          setEpiFormActivate(true);
          if (employeeData.EPI) setEpi(true)
          setEpiActivities(employeeData.EPIactivities || []);
        } catch (error) {
          console.error("Erro ao carregar os dados do funcionário:", error);
        }
      };
      loadEmployeeData();
    }
  }, [id]);

  const _toggelgGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => setGender(event.target.value);
  const onFinishFailed = (errorInfo: any) => console.error('Erro no envio:', errorInfo);
  const _toggelgViewEpi = () => setBtnsEPI((prev) => !prev);
  const handleDeleteEPIactivities = (index: number) => setEpiActivities((prev) => prev.filter((_, i) => i !== index));


  const epiChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEpiFormActivate(e.target.checked);
    form.setFieldsValue({EPI: !epiFormActivate,});
  };

  const validateForm = () => {
    const formValues = form.getFieldsValue();
    const requiredFields = ["name", "gender", "cpf", "birthdayDate", "rg", "role"];
    const isValid = requiredFields.every((field) => formValues[field]);
    setReleaseEPI(isValid);
  };

  const handleAddEpiActivity = () => {
    const activity = form.getFieldValue("EPIactivity");
    const EPI = form.getFieldValue("EPIepi");
    const ca = form.getFieldValue("EPIca");
    if (activity && EPI && ca) {
      const classEPI = { EPIactivity: activity, EPIepi: EPI, EPIca: ca };
      setEpiActivities((prev) => [...prev, classEPI]);
      form.resetFields(["EPIactivity", "EPIepi", "EPIca"]);
    }
  };
  const prePayloadPost = (data: any): EmployeesProps => {
    const formattedData: EmployeesProps = {
      active: data.active,
      name: data.name,
      gender: data.gender,
      cpf: data.cpf,
      birthdayDate: data.birthdayDate,
      rg: data.rg,
      role: data.role,
      EPI: data.EPI,
      healthCertificate: data.healthCertificate || null,
      EPIactivities: (data.EPIactivities || []).map((param: EPIAtivity) => ({
        EPIactivity: param.EPIactivity,
        EPIepi: param.EPIepi,
        EPIca: param.EPIca
      })) || [],
    };

    return formattedData;
  };
  const prePayloadPut = (data: any): EmployeesProps => {
    const formattedData: EmployeesProps = {
      active: data.active,
      name: data.name,
      gender: data.gender,
      cpf: data.cpf,
      birthdayDate: data.birthdayDate ? data.birthdayDate.format("YYYY-MM-DD") : null,
      rg: data.rg,
      role: data.role,
      EPI: data.EPI,
      healthCertificate: data.healthCertificate || null,
      EPIactivities: (data.EPIactivities || []).map((param: EPIAtivity) => ({
        EPIactivity: param.EPIactivity,
        EPIepi: param.EPIepi,
        EPIca: param.EPIca
      })) || [],
    };

    return formattedData;
  };

  const handleFinish = async (formData: EmployeesProps) => {
    formData.EPIactivities = epiActivities;
    const formattedPayloadPost = prePayloadPost(formData);
    const formattedPayloadPut = prePayloadPut(formData);

    console.warn(formattedPayloadPost);
    console.warn(formattedPayloadPut);

    try {
      if (id) await _updateEmployee(id, formattedPayloadPut);
      else await _fetchEmployee(formattedPayloadPost);
    } catch (error) {
      console.error("Error submitting employee:", error);
    }
    window.location.reload();
  };

  return (
    <div>
      <Form
        className='my-3 px-4 mx-4'
        form={form}
        layout="vertical"
        autoComplete="off"
        onValuesChange={validateForm}
        onFinishFailed={onFinishFailed}
        onFinish={handleFinish}
        initialValues={{
          active: true,
          gender: EmployeesGender.MALE,
          EPI: false,
          EPIactivities: [],
        }}
      >
        <Row gutter={16}>
          <Col span={24} className='border-theme shadow my-1 py-2 br1'>
            <Row align="middle" justify="space-between" gutter={16}>
              <Col className='d-flex justify-content-start' span={15}>
                <Text>O trabalhador está ativo ou inativo?</Text>
              </Col>
              <Col className='d-flex justify-content-end' span={7}>
                <Form.Item name="active" valuePropName="checked" noStyle
                  rules={[{ required: true, type: "boolean" }]}
                >
                  <SwitchDefaultPattern on={'Ativo'} off={'Inativo'} checked={active} onChange={setActive} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Row className='border-theme shadow p-2 mb-0 mt-3 br1'>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item label="Nome" name="name" rules={[{ required: true, type: "string", message: "Por favor, insira o nome!" }]}>
                <Input className='border-theme text-dark' maxLength={50} placeholder="Nome" />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item
                label="Sexo"
                name="gender"
                rules={[{ required: true, message: "Por favor, selecione o genero!" }]}
              >
                <InputRadioGenderDefault onChange={_toggelgGenderChange} gender={gender} />
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
                name="birthdayDate"
                className='truncate'
                rules={[
                  { required: true, type: "date", message: "Por favor, insira a data de nascimento!" },
                ]}
              >
                <DatePicker onClick={(e) => { form.setFieldsValue({ birthdayDate: null }); }} format="YYYY-MM-DD" className='border-theme w-100 text-dark' />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item label="RG" name="rg" rules={[{ required: true, type: "string", message: "Por favor, insira o RG!" }]}>
                <Input placeholder="RG" type='text' pattern="[0-9]*" inputMode="numeric" className='border-theme' maxLength={7} />
              </Form.Item>
            </Col>
            <Col className='px-2' xs={24} md={12}>
              <Form.Item label="Cargo" name="role" rules={[{ required: true, message: "Por favor, insira o cargo!" }]}>
                <Select className='input-select-default text-dark' placeholder="Selecione um cargo">
                  {optionrole().map((item, index) => (
                    <Select.Option key={index} value={item.role}>
                      {item.role}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          {/* EPI e EPIactivities */}
          <Row className={`${epiFormActivate ? 'border-theme' : 'border-inactive'}  shadow p-2 mb-0 mt-3 br1`}>
            <Col className='px-2' span={24}>
              <Form.Item name="EPI">
                <Input
                  type="checkbox"
                  disabled={!releaseEPI}
                  checked={epi ? true : false}
                  className="form-check-input me-2"
                  id="flexCheckDefault"
                  onChange={(e) => epiChecked(e)}
                />
                <label htmlFor="flexCheckDefault" className="form-check-label">
                  O trabalhador não usa EPI.
                </label>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Col span={24}>
                {epiActivities.map((param, index) => (
                  <Row className='br2 shadow mx-2 my-4 bg-light border-theme px-3 py-2' key={index}>
                    <Col span={20}>
                      <Row className='mt-2'>
                        <Col><Text className='fw-bold'>Aividade</Text></Col>
                        <Col><Text className='bg-theme text-light br3 ms-2 py-1 px-2'>{param.EPIactivity}</Text></Col>
                      </Row>
                      <Row className='mt-2'>
                        <Col><Text className='fw-bold'>EPI</Text></Col>
                        <Col><Text className='bg-theme text-light br3 ms-2 py-1 px-2'>{param.EPIepi}</Text></Col>
                      </Row>
                      <Row className='mt-2'>
                        <Col><Text className='fw-bold'>CA</Text></Col>
                        <Col><Text className='bg-theme text-light br3 ms-2 py-1 px-2'>{param.EPIca}</Text></Col>
                      </Row>
                    </Col>
                    <Col span={4} className="text-end">
                      <Button
                        onClick={() => handleDeleteEPIactivities(index)}
                        className="border-danger text-danger"
                      >
                        <DeleteOutlined />
                      </Button>
                    </Col>
                  </Row>
                ))}
              </Col>
              {!btnsEPI ? (
                <Row className={`${epiFormActivate ? 'border-theme' : 'border-inactive'}  shadow mx-2 p-2 mb-0 br1`}>
                  <Col className='px-2' span={24}>
                    <Form.Item label="Selecione a atividade:" name="EPIactivity">
                      <Select disabled={!epiFormActivate} className={`${epiFormActivate ? 'input-select-default' : 'input-select-default-inactive'} text-dark`} placeholder="Selecione uma atividade">
                        {optionEpiActivity().map((item, index) => (
                          <Select.Option key={index} value={item.activity}>
                            {item.activity}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col className='px-2' span={isMobile ? 24 : 8} >
                    <Form.Item label="Selecione o EPI" name="EPIepi">
                      <Select disabled={!epiFormActivate} className={`${epiFormActivate ? 'input-select-default' : 'input-select-default-inactive'} text-dark`} placeholder="Selecione o EPI">
                        {optionEpi().map((item, index) => (
                          <Select.Option key={index} value={item.epi}>
                            {item.epi}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col className='px-2' span={isMobile ? 24 : 8} >
                    <Form.Item
                      label="Informe o número do CA"
                      name="EPIca">
                      <Input maxLength={4} disabled={!epiFormActivate} className={`${epiFormActivate ? 'border-theme' : 'border-inactive'}`} placeholder="Número do CA" />
                    </Form.Item>
                  </Col>
                  <Col className='px-2 align-content-center' span={isMobile ? 24 : 8} >
                    <Form.Item className='mb-0'>
                      <Flex gap="large" wrap>
                        {!epiFormActivate ? (
                          <></>
                        ) : (
                          <BtnDefaultPattern onClick={() => { _toggelgViewEpi(); handleAddEpiActivity() }} styleClass={`${epiFormActivate ? 'border-theme' : 'border'} color-theme`} content="Adicionar EPI" />
                        )}
                      </Flex>
                    </Form.Item>
                  </Col>

                </Row>
              ) : (
                <></>
              )}

            </Col>

            <Col className='px-2 mt-4' span={24}>
              <Form.Item>
                <Flex gap="large" wrap>
                  {!epiFormActivate ? (
                    <></>
                  ) : (
                    <BtnDefaultPattern onClick={(e) => { e.preventDefault(); _toggelgViewEpi() }} styleClass="p-2 color-theme border-theme" content={btnsEPI ? 'Adicionar outra atividade' : 'Ocultar Atividade'} />
                  )}
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
                <BtnDefaultPattern onClick={() => { }} type={'submit'} styleClass="p-2 color-theme border-theme" content="Salvar" />
              </Flex>
            </Col>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EmployeeFormAddEdit;
// const onFinish = (values) => {
//   const payload = {
//     ...values,
//     birthdayDate: values.birthdayDate
//       ? values.birthdayDate.format("YYYY-MM-DD")
//       : null,
//   };

//   console.log("Dados para enviar:", payload);
//   // Enviar payload ao backend
// };
