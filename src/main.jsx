
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
import Root from './Main/Root'
import Home from './components/Router/Home'
import NewArrival from './components/Router/NewArrival'
import Categoties from './components/Router/Categoties'
import About from './components/Router/About'
import Contact from './components/Router/Contact'
import Login from './components/Router/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/new-arrival',
        element:<NewArrival></NewArrival>
      },
      {
        path:'/categories',
        element:<Categoties></Categoties>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)