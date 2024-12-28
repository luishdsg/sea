import React, { useState } from 'react';
import { Row, Steps, Typography } from 'antd';
import { DashOutlined, HomeOutlined } from '@ant-design/icons';
import '../index.css';
import { TopBarProps } from '../shared/interfaces/Props.interface';
import { useMediaQuery } from '@react-hook/media-query';

const { Title, Text } = Typography;
const { Step } = Steps;

const TopBar: React.FC<TopBarProps> = ({ indexStepPage,  stepTopBarEnabled }) => {
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const iconSize = `${isMobile ? '10px' : '30px'}`;

    const items = [
        { title: 'Item 1', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
        { title: 'Item 2', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
        { title: 'Item 3', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
        { title: 'Item 4', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
        { title: 'Item 5', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
        { title: 'Item 6', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
        { title: 'Item 7', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
    ];


    const handleStepNext: (index: number) => void = (index: number) => {
        if (index === 0 || stepTopBarEnabled) setCurrent(index); indexStepPage(index + 1);
    };

    return (
        <Row className='shadow-sm topbar bg-light br2 p-4'>

            <Steps
                current={current}
                direction="horizontal"
                responsive={false}
                onChange={handleStepNext}
            >
                {items.map((item, index) => (
                    <Step
                        key={index}
                        disabled={index !== 0 && !stepTopBarEnabled}
                        icon={
                            <>
                                <button
                                    className={`
                                        edit-steps-btn border 
                                        ${index <= current ? 'border-dark' : ''} 
                                        ${isMobile ? 'p-1' : 'p-3'}
                                        mb-2 br2 }`}
                                    style={{
                                        background: stepTopBarEnabled || index === 0 ? 'var(--theme)' : 'var(--inactive)',
                                        cursor: index === 0 || stepTopBarEnabled ? 'pointer' : 'not-allowed',
                                        opacity: index === 0 || stepTopBarEnabled ? 1 : 0.5,
                                    }}
                                    onClick={() => handleStepNext(index)}
                                    disabled={index !== 0 && !stepTopBarEnabled}
                                >
                                    {item.icon}
                                </button>
                                <div className='d-block'>
                                    <Title className='mb-0' disabled={index !== 0 && !stepTopBarEnabled}
                                        style={{
                                            fontSize: isMobile ? '10px' : '16px',
                                            color: 'var(--theme)',
                                            fontWeight: index <= current ? 'bold' : 'normal',
                                        }}
                                        level={isMobile ? 5 : 5}>
                                        {item.title}
                                    </Title>
                                    {index <= current - 1 && (
                                        <Text style={{ fontSize: isMobile ? '10px' : '16px', }} className='m-0 text-dark' italic>Concluído</Text>
                                    )}
                                </div>
                                <div style={{top: `${isMobile ? '5px' : '0'}`, transform: 'scale(1.5)', left:  `${isMobile ? '180%' : '130%'}`}} className='position-absolute color-theme'><DashOutlined /><DashOutlined /><DashOutlined /></div>
                            </>
                        }
                    />
                ))}

            </Steps>
        </Row>
    );
};

export default TopBar;