import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    ApartmentOutlined,
    EditFilled,
    HomeOutlined,
    BellOutlined,
    HistoryOutlined,
    UserOutlined,
} from '@ant-design/icons';
import '../index.css';
import { SidebarButtonProps } from '../interfaces/Props.interface';

const { Sider } = Layout;



const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, buttonKey, onHoverKey, setOnHoverKey, isActive, onClick }) => (
    <Menu.Item
        key={buttonKey}
        icon={icon}
        onClick={() => onClick(buttonKey)}
        onMouseEnter={() => setOnHoverKey(buttonKey)}
        onMouseLeave={() => setOnHoverKey(null)}
        className={`w-100 h50px mt-4 br0  sidebar-button ${isActive || onHoverKey  === buttonKey ? 'active-sidebar-btn' : 'inactive-sidebar-btn'}`}
    />
);


const Sidebar: React.FC = () => { 
    const [activeKey, setActiveKey] = useState<string>('1');
    const [onHoverKey, setOnHoverKey] = useState<string | null>(null);
    const buttons = [
        { key: '1', icon: <HomeOutlined className='h-100 w-100 sideBarButtons' /> },
        { key: '2', icon: <EditFilled className='h-100 w-100 sideBarButtons ' /> },
        { key: '3', icon: <ApartmentOutlined className='h-100 w-100 sideBarButtons' /> },
        { key: '4', icon: <BellOutlined className='h-100 w-100 sideBarButtons' /> },
        { key: '5', icon: <HistoryOutlined className='h-100 w-100 sideBarButtons' /> },
        { key: '6', icon: <UserOutlined className='h-100 w-100 sideBarButtons' /> },
    ];


    return (
        // <Layout style={{ minHeight: '100vh' }}>
            <Sider
                width={80}
                className='sideBarModel h100vh bg-theme'
                collapsible={false}
            >
                <Menu
                    theme="light"
                    mode="vertical"
                    defaultSelectedKeys={['1']}
                    className='sideBarMenu  bg-theme'
                    selectedKeys={[activeKey]}
                >
                    {buttons.map((button) => (
                        <SidebarButton
                            key={button.key}
                            buttonKey={button.key}
                            icon={button.icon}
                            isActive={activeKey === button.key}
                            onClick={setActiveKey}
                            onHoverKey={onHoverKey}
                            setOnHoverKey={setOnHoverKey}
                        />
                    ))}
                </Menu>
            </Sider>
        // </Layout>
    );
};

export default Sidebar;

