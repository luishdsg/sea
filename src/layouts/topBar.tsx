import React, { useState } from 'react';
import { Steps, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import '../index.css';
import { TopBarProps } from '../interfaces/SidebarButtonProps.interface';



const iconSize = '30px'
const { Step } = Steps;
const { Title, Text } = Typography;
const items = [
    { title: 'Item 1', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
    { title: 'Item 2', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
    { title: 'Item 3', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
    { title: 'Item 4', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
    { title: 'Item 5', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
    { title: 'Item 6', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
    { title: 'Item 7', icon: <HomeOutlined style={{ fontSize: iconSize }} /> },
];


const TopBar: React.FC<TopBarProps> = ({}) => {
    const [current, setCurrent] = useState(0);

    const handleStepClick: (index: number) => void = (index: number) => {
        setCurrent(index);
    };
    return (
        <div className='shadow-lg p-4'>
            <Steps
                current={current}
                direction="horizontal"
                className="custom-steps"
                onChange={handleStepClick}
            >
                {items.map((item, index) => (
                    <Step
                        key={index}
                        iconPrefix='custom-prefix'
                        icon={
                            <>
                                <button
                                className={`edit-steps-btn mb-2 p-3 br3 }`}
                                    style={{
                                        background: index <= current ? 'var(--theme)' : 'var(--inactive)',
                                    }}
                                >
                                    {item.icon}
                                </button>
                                <div className='d-block'>
                                    <Title className='mb-0'
                                        style={{
                                            color:'var(--theme)',
                                            fontWeight: index <= current ? 'bold' : 'normal',
                                        }}
                                        level={5}>{item.title}
                                    </Title>
                                    {index <= current - 1 && (
                                        <Text style={{color: 'var(--theme)'}} className='m-0' italic>Concluído</Text>
                                    )}
                                </div>
                            </>

                        }
                    />
                ))}
            </Steps>
        </div>
    );
};

export default TopBar;