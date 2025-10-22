import { Empresas } from './routes/Empresas'
import { Login } from './routes/Login.tsx'
import { MinhaEmpresa } from './routes/MinhaEmpresa.tsx'
import { Register } from './routes/Cadastro.tsx'
import { Agendamentos } from './routes/Agendamentos.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Relatorios } from './routes/Relatorios.tsx'
import { Home } from './routes/Home.tsx'


const router = createBrowserRouter([
  { path: "/",
    element: <App />,
  },
  { path: "/empresas",
    element: <Empresas />,
  },
  { path: "/auth",
    children: [
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      }
    ],
  },
  { path: "/agendamentos",
    element: <Agendamentos />,
  },
  { path: "/home",
    element: <Home/>,
  },
  { path: "/relatorio",
    element: <Relatorios />,
  },
  { path: "/:id",
    element: <MinhaEmpresa />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
