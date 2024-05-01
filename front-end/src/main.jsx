import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Book from './components/Book.jsx';
import ManagementConsole from './components/ManagementConsole.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='management_login' element={<Login/>}/>
        <Route path='booknow' element={<Book/>}/>
        <Route path='dashboard' element={<ManagementConsole/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
