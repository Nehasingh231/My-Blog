import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import WebDesign from './Components/WebDesign';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Help from './Components/Help'
import Resources from './Components/Resources'

const AppLayout = () => {
  return (
    <div>
    <Header />
    <Home />
     <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
     path: "/",
     element: <AppLayout />,
     children: [
       {
        path: "/about",
        element: <About />,
       },
       {
        path: "/help",
        element: <Help />,
       },
       {
        path: "/webdesign",
        element: <WebDesign />,
       },
       {
        path: "/blog",
        element: <Blog />,
       },
       {
        path: "/contact",
        element: <Contact />,
       },
       {
        path: "/resources",
        element: <Resources />,
       },
      
     ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


