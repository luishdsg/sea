import React from 'react';
import { Layout } from "antd";
import ComingSoon from '../layouts/comingSoon.layout';


const NotificationsPage  : React.FC = () => {
  return (
    <Layout>
        <ComingSoon title="O sininho não toca na página de notificação"/>
    </Layout>
  );
};

export default NotificationsPage ;
