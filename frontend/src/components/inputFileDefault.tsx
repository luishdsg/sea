import { DeleteOutlined, LinkOutlined } from "@ant-design/icons";
import { Col, Input, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { FileUploadProps } from "../shared/interfaces/Props.interface";

const { Text } = Typography;

const FileUpload: React.FC<FileUploadProps> = ({ value, onChange }) => {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    // captura o nome do arquivo do funcionário(a)
    useEffect(() => {
        if (value) {
            const [name] = value.split('.');
            const mockFile = { name: `${name}`, type: '' } as File;
            setFile(mockFile);
        }
    }, [value]);

    // inputa o nome do arquivo e manda para form
    const inputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (!allowedTypes.includes(selectedFile.type)) alert("Somente arquivos (.jpg, .png ou .pdf) são permitidos!");
            if (selectedFile) setFile(selectedFile); onChange?.(`${selectedFile.name}`);
            uploadProgress();
        }
    };

    const deleteFile = () => {
        setFile(null);
        setProgress(0);
        onChange?.('');
    };

    //animação de progresso de upload do arquivo
    const uploadProgress = () => {
        let progressValue = 0;
        const interval = setInterval(() => {
            progressValue += 10;
            setProgress(progressValue);
            if (progressValue >= 100) {
                clearInterval(interval);
            }
        }, 300);
    };

    return (
        <div className="w-100">
            <Input
                accept="image/png, application/pdf image/jpeg"
                type="file"
                id="fileInput"
                onChange={inputFileChange}
                style={{ display: "none" }}
            />
            {!file ? (
                <label htmlFor="fileInput" className="p-2 cursor color-theme br1 w-100 text-center mt-2 border-theme">
                    Selecionar arquivo
                </label>
            ) : (
                <Row>
                    <Col className="align-content-center" span={22}>
                        <Text className="text-danger">
                            <LinkOutlined className="pe-2" />{file.name}
                        </Text>
                    </Col>
                    <Col span={2}>
                        <DeleteOutlined style={{ background: '#ff000048' }} className="p-2 br3" onClick={deleteFile} />
                    </Col>
                    <Col span={24}>
                        {progress < 100 && (
                            <div style={{ height: '3px' }} className="progress-bar overflow-hidden br3 bg-light">
                                <div
                                    className="progress bg-theme h-100"
                                    style={{ transition: 'width 0.3s', width: `${progress}%` }}
                                ></div>
                            </div>
                        )}
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default FileUpload;
