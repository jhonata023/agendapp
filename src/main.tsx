import { Empresas } from './routes/Empresas';
import { Login } from './routes/Login.tsx';
import { MinhaEmpresa } from './routes/MinhaEmpresa.tsx';
import { Register } from './routes/Cadastro.tsx';
import { Agendamentos } from './routes/Agendamentos.tsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Relatorios } from './routes/Relatorios.tsx';
import { Home } from './routes/Home.tsx';
import { ProtectedRoute } from './routes/ProtectedRoute.tsx';


const router = createBrowserRouter([
  // Public Routes
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
  { path: "/:id",
    element: <MinhaEmpresa />,
  },

  //Private Routes
  { element: <ProtectedRoute/>,
    children: [
      {
        path: "/agendamentos",
        element: <Agendamentos />,
      },
      { path: "/relatorio",
        element: <Relatorios />,
      },
      { path: "/home",
        element: <Home/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
