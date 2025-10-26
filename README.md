# Projeto AgendApp

Este projeto tem como objetivo aplicar os conhecimentos de TS + React

## Utilização

Um sistema servirá para uma empresa disponibilizar a agenda de seus serviços de maneira online, onde o cliente poderá marcar os serviços sem necessidade de ir até o estabelecimento, de maneira rápida e descomplicada

### Tecnologias utilizadas
- React
- NodeJS
- Express
- TypeScript

## Lembrete
1. Front
    - Empresas
        - Adicionar função da barra de pesquisa
        - Limitar a 5 empresas por página
    
    - Relatórios
        - Adicionar mudança de anos no gráfico
    
    - Home
        - Receber os dados de Perfil e horários do Back

    - Agendamentos
        - Diferenciar a página do cliente e empresa
        - Adicionar função de cancelar para ambos os lados
        - Permitir a empresa diponibilizar a chave PIX, confirmar o pagamento e avisar o cliente
    
    - Página da loja
        - Enviar os dados dos agendamentos para o Back
        - Adicionar os próximos 7 dias como calendário de agenda
        - Exbir somente os horários do profissional que executa o serviço

    - Cadastro
        - Separar o cadastro por etapas
        - diferenciar a empresa do cliente
        - Enviar os dados para o Back

2. BackEnd
    - /home
        - Trabalhar os horários. Tornar o dia inteiro disponível, tornando os horários disponíveis baseados no tempo do serviço
        - CRUD dos serviços, horários, profissionais e perfil
    
    - /agendamentos
        - Trabalhar o cancelamento por parte do cliente e da empresa
        - CRUD dos agendamentos
        - Trabalhar os cancelamentos, confimações e pendências

    - /login
        - Implementar o BCRYPT e JWT
        - Trabalhar com o localstorage e cookies para armazenar dados importantes do lado do cliente
        - Implementar os middleWares

    - /register || /forgot-password
        - CRUD dos usuários

    - /
        - Implementar o MercadoPago ou Stripe (Pagamentos com o cartão)

    - /profile
        - Página onde o cliente poderá visualizar e altarar suas informações, como nome, telefone, endereço, foto ...
