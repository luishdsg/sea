import React, { useEffect, useState } from 'react';
import { Layout, Menu, Tooltip } from 'antd';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import FloatBtnSideBarMobile from '../components/floatBtnSideBarMobile';

const { Sider } = Layout;



const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, buttonKey, onHoverKey, setOnHoverKey, isActive, onClick }) => (
    <Menu.Item
        key={buttonKey}
        icon={icon}
        onClick={() => onClick(buttonKey)}
        onMouseEnter={() => setOnHoverKey(buttonKey)}
        onMouseLeave={() => setOnHoverKey(null)}
        className={`w-100 h50px mt-4 br0 sidebar-button ${isActive || onHoverKey === buttonKey ? 'active-sidebar-btn' : 'inactive-sidebar-btn'}`}
    />
);


const Sidebar: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string>('1');
    const [onHoverKey, setOnHoverKey] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width: 600px)');
    const [iscolapseSideBarMobile, setIscolapseSideBarMobile] = useState<boolean>();


    useEffect(() => {
        setIscolapseSideBarMobile(isMobile);
    }, [isMobile]);


    console.log(iscolapseSideBarMobile, '<br/', isMobile)
    const buttons = [
        { key: '1', icon: <HomeOutlined className='h-100 sideBarButtons' />, title: "Home", route: '/' },
        { key: '2', icon: <EditFilled className='h-100  sideBarButtons ' />, title: "Funcionario(as)", route: '/employees' },
        { key: '3', icon: <ApartmentOutlined className='h-100 sideBarButtons' />, title: "Departamentos", route: '/departments' },
        { key: '4', icon: <BellOutlined className='h-100 sideBarButtons' />, title: "Notificações", route: '/notifications' },
        { key: '5', icon: <HistoryOutlined className='h-100 sideBarButtons' />, title: " Histórico", route: '/historic' },
        { key: '6', icon: <UserOutlined className='h-100 sideBarButtons' />, title: "Perfil", route: '/profile' },
    ];

    const linkNavigation = (key: string) => {
        const button = buttons.find((btn) => btn.key === key);
        if (button?.route) {
            navigate(button.route);
            setActiveKey(key);
        }
    };

    const colapseSideBarMobile = () => {
        if (isMobile) {
            setIscolapseSideBarMobile(!iscolapseSideBarMobile);
        }
    }

    return (
        <Sider
            width={80}
            className={`sideBarModel h100vh bg-theme
                ${iscolapseSideBarMobile ? 'ms-less-3 position-absolute' : 'mb-0'}`}
            collapsible={false}
        >
            <Menu
                theme="light"
                mode="vertical"
                defaultSelectedKeys={['1']}
                className='sideBarMenu  bg-theme'
                selectedKeys={[buttons.find((button) => location.pathname === button.route)?.key || "1"]}
            >
                {buttons.map((button) => (
                    <Tooltip key={button.key} title={button.title} placement="right">
                        <span>
                            <SidebarButton
                                key={button.key}
                                buttonKey={button.key}
                                icon={button.icon}
                                isActive={location.pathname === button.route}
                                onClick={linkNavigation}
                                onHoverKey={onHoverKey}
                                setOnHoverKey={setOnHoverKey}
                            />
                        </span>
                    </Tooltip>
                ))}
            </Menu>
            {isMobile ? (
                <FloatBtnSideBarMobile onClick={colapseSideBarMobile} />
            ) : (
                <></>
            )}
        </Sider>
    );
};

export default Sidebar;

