import React from 'react';
import { StepPageProps } from '../shared/interfaces/Props.interface';
import ComingSoon from '../layouts/comingSoon.layout';
import { Layout } from 'antd';



const StepPage: React.FC<StepPageProps> = ({ step }) => {

    const renderStepContent = (step: number) => {
        switch (step) {
            case 2:
                return (
                    <Layout>
                        <ComingSoon title="essa página ainda está em contrução" />
                    </Layout>
                );
            case 3:
                return (
                    <Layout>
                        <ComingSoon title="essa daqui ainda não foi finalizada" />
                    </Layout>
                );
            case 4:
                return (
                    <Layout>
                        <ComingSoon title="essa página está em reparos" />
                    </Layout>
                );
            case 5:
                return (
                    <Layout>
                        <ComingSoon title="essa página foi esquecida" />
                    </Layout>
                );
            case 6:
                return (
                    <Layout>
                        <ComingSoon title="essa página nunca vai ser finalizada" />
                    </Layout>
                );
            case 7:
                return (
                    <Layout>
                        <ComingSoon title="essa página nem era pra existir" />
                    </Layout>
                );
            default:
                return (
                    <Layout>
                        <ComingSoon title="essa é a última página, e não não a terminaremos" />
                    </Layout>
                );
        }
    };

    return (
        <div>
            {renderStepContent(step)}
        </div>
    );
};
export default StepPage;