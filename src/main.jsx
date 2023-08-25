import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Home from './routes/Home.jsx'
import Projetos from './routes/Projetos.jsx'
import Empresa from './routes/Empresa.jsx'
import Contatos from './routes/Contatos.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/projetos",
        element: <Projetos/>
      },
      {
        path: "/empresa",
        element: <Empresa/>
      },
      {
        path: "/contatos",
        element: <Contatos/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
