const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

let bd = [
  {id: 1,
    title: "Barbearia Soares",
    address: "Rua das Palmeiras, 123 - São Paulo",
    srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmSvj8oN34pW_UAGFBD0HSDwFYWbRSzX6-g&s",
    rating: 3.8,
    description: "Tradição e modernidade se encontram na Barbearia Soares. Especialistas no corte perfeito.",
    services: [
      {id:101, name: 'Cortar Cabelo', price: 25, duration: 45, professionals: [
        {id: 1, name: 'João Silva', rating: 4.6}, 
        {id: 2, name: 'Pedro Ramos', rating: 4.1}
      ]},
      {id:102, name: 'Aparar a Barba', price: 20, duration: 20, professionals: [
        {id: 1, name: 'João Silva', rating: 3.9}, 
        {id: 2, name: 'Pedro Ramos', rating: 4.7}
      ]},
      {id:301, name: 'Pigmentação', price: 40, duration: 60, professionals: [
        {id: 1, name: 'João Silva', rating: 4.8}
      ]},
    ]
  },
  {id: 2,
    title: "Clínica Bem-Estar",
    address: "Av. Paulista, 500 - São Paulo",
    srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbHPLZDRkVLSXwYa7kdqcFKI6nUsPsC32ow&s",
    rating: 4.8,
    description: "Seu centro completo de saúde e bem-estar. Consultas médicas e terapias holísticas."
  },
  {id: 3,
    title: "PetShop Amigo Fiel",
    address: "Rua dos Girassóis, 89 - Campinas",
    srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-Dp02BOx7xtcFcEk0p17iY2BJsMgFZA46A&s",
    rating: 3.5,
    description: "Tosa, banho e muito carinho para seu melhor amigo.",
  },
  {id: 4,
    title: "Estética & Spa Beleza Pura",
    address: "Alameda Santos, 230 - São Paulo",
    srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4drA4oWsDDWaJcGyOeBNgSsxqbjfFScnysg&s",
    rating: 4.2,
    description: "Momentos de relaxamento e cuidado pessoal.",
  },
  {id: 5,
    title: "Personal Robson",
    address: "Prado - Belo Horizonte",
    srcImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1saFwWn59Bpckvw0AY9DgudbPPSlsg2psQ&s",
    rating: 2.8
  },
]

let bdAgendamentos = [
    {   id: 1,
        enterprise: 'Barbearia Estilo',
        service: 'Corte de cabelo',
        professional: 'João Silva',
        date: '17/10/2025',
        time: '14:00',
        status: 'Confirmado',
        price: 25.00,
        duration: 45
    },
    {   id: 2,
        enterprise: 'PetShop Amigo Fiel',
        service: 'Banho e Tosa',
        professional: 'Felipe Souza',
        date: '21/10/2025',
        time: '11:00',
        status: 'Cancelado',
        price: 65.00,
        duration: 150
    },
    {   id: 3,
        enterprise: 'Clínica Bem-Estar',
        service: 'Massagem Relaxante',
        professional: 'Maria Oliveira',
        date: '19/10/2025',
        time: '09:30',
        status: 'Pendente',
        price: 80.00,
        duration: 60
    },
]

//Config
    app.use(express.json());
    app.use(cors({
        origin: 'http://localhost:5173' // ou '*' para liberar todas as origens (não recomendado em produção)
    }));

//Routes
    app.get('/', (req, res) => {
        res.send({msg: 'Hello World'})
    })
    app.post('/login', (req, res) => {
        console.log(req.body);
    })
    app.get('/empresas', (req, res) => {
        res.json(bd)
    })
    app.get('/agendamentos', (req, res) => {
        res.json(bdAgendamentos)
    })

app.listen(PORT, () => {console.log('Servidor rodando na porta ' + PORT)});