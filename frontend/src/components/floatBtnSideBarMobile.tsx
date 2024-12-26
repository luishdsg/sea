import React from 'react';
import { FloatButton } from 'antd';
import { FloatBtnSideBarMobileProps } from '../interfaces/Props.interface';
import { MenuOutlined } from '@ant-design/icons';

const FloatBtnSideBarMobile: React.FC<FloatBtnSideBarMobileProps> = ({onClick}) => {
    return (
        <FloatButton style={{transform: 'scale(1.5)', insetInlineEnd: 50}} tooltip="menu lateral" className='h1' onClick={onClick} icon={<MenuOutlined />} type="default"/>
    )
}
export default FloatBtnSideBarMobile;