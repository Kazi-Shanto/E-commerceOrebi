import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Pages/Home/Shop.jsx';
import About from './Pages/Home/About.jsx';
import Contacts from './Pages/Home/Contacts.jsx';
import Journal from './Pages/Home/Journal.jsx';
import Home from './Pages/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/shop",
    element: <Shop></Shop>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contacts",
    element: <Contacts></Contacts>,
  },
  {
    path: "/journal",
    element: <Journal></Journal>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
