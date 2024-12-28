import React from 'react';

const _optionsEmployeeForm = () => {

    const optionrole = () => [
        { role: 'Analista de Marketing Digital' },
        { role: 'Desenvolvedor(a) Full Stack' },
        { role: 'Engenheiro(a) de Produção' },
        { role: 'Médico(a) Clínico Geral' },
        { role: 'Gestor(a) de Projetos' },
        { role: 'Designer Gráfico' },
        { role: 'Advogado(a) Corporativo(a)' },
        { role: 'Professor(a) Universitário(a)' },
        { role: 'Analista de Recursos Humanos' },
        { role: 'Técnico(a) em Manutenção Industrial' },
    ];

    const optionEpiActivity = () => [
        {activity: 'Análise de requisitos'},
        {activity: 'Desenvolvimento de softwre'},
        {activity: 'Testes unitários e integração'},
        {activity: 'Revisão de código'},
        {activity: 'Manutenção de sistemas existentes'},
        {activity: 'Implementação de novas funcionalidades'},
        {activity: 'Documentação de processos e sistemas'},
        {activity: 'Suporte técnico a usuários'},
        {activity: 'Gerenciamento de versão de código'},
        {activity: 'Planejamento de sprints'}
    ];
    const optionEpi = () => [
        {epi: 'Computador '},
        {epi: 'Cadeira ergonômica '},
        {epi: 'Monitor de alta resolução '},
        {epi: 'Software de edição de código '},
        {epi: 'Ferramenta de gerenciamento de tarefas '},
        {epi: 'Teclado e mouse '},
        {epi: 'Headset ou fones de ouvido '},
        {epi: 'Sistema de backup '},
        {epi: 'Software de controle de versão '},
        {epi: 'Conexão de internet de alta velocidade '}
    ];


    return { optionrole , optionEpi, optionEpiActivity};
};
export default _optionsEmployeeForm;