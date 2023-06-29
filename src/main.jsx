import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextNews } from './context/ContextNews.jsx'
import Home from './pages/Home.jsx'
import ConvertPost from './pages/ConvertPost.jsx'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/",
  element: <Home/>},
  {path:"/post-linkedin",
  element: <ConvertPost/>},

])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ContextNews>
     <RouterProvider router = {router}>
        <App />
     </RouterProvider>
    </ContextNews>
  </React.StrictMode>,
)
