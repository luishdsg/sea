import React from 'react';
import { Layout, Menu } from 'antd';
import {
    ApartmentOutlined,
    EditOutlined,
    TeamOutlined,
    BellOutlined,
    HistoryOutlined,
    UserOutlined,
} from '@ant-design/icons';
import '../index.css';

const { Sider } = Layout;
const fontSize = '35px';


interface SidebarButtonProps {
    icon: React.ReactNode;
    key: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, key }) => (
    <Menu.Item
        key={key}
        icon={icon}
        className='w-100 h-50px m2'
        style={{
            // backgroundColor: 'red',
        }}
    />
);


const Sidebar: React.FC = () => {
    const buttons = [
        { key: '1', icon: <ApartmentOutlined className='h-100 w-100 sideBarButtons' />},
        { key: '2', icon: <EditOutlined className='h-100 w-100 sideBarButtons ' /> },
        { key: '3', icon: <TeamOutlined  className='h-100 w-100 sideBarButtons' /> },
        { key: '4', icon: <BellOutlined  className='h-100 w-100 sideBarButtons' /> },
        { key: '5', icon: <HistoryOutlined  className='h-100 w-100 sideBarButtons' /> },
        { key: '6', icon: <UserOutlined  className='h-100 w-100 sideBarButtons' /> },
    ];
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                width={80}
                style={{
                    background: '#6CA0BA',
                    borderRadius: '0 10px 10px 0',
                    position: 'fixed',
                    height: 'fit-content',
                    top: '25%',
                    bottom: '25%',
                }}
                collapsible={false}
            >
                <Menu
                    theme="dark"
                    mode="vertical"
                    defaultSelectedKeys={['1']}
                    style={{
                        background: '#6CA0BA',
                        border: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '0px 20px 20px 0px',
                        alignItems: 'center',
                    }}
                >
                    {buttons.map((button) => (
                        <SidebarButton key={button.key} icon={button.icon} />
                    ))}
                </Menu>
            </Sider>
        </Layout>
    );
};

export default Sidebar;
