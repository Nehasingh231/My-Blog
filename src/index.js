import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Body from './Components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Help from './Components/Help';
import WebDesign from './Components/WebDesign';
import Blog from './Components/Blog';
import Resources from './Components/Resources';
import Contact from './Components/Contact';
import Error from './Components/Error';
import ChatButton from './Components/ChatButton';
// import ShopMart from './Components/ShopMart';

 const ShopMart = lazy(() => import('./Components/ShopMart'));

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {  
        path: "/about",
        element: <About />
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/webdesign",
        element: <WebDesign />
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
      {
        path: "/chatbutton",
        element: <ChatButton />,
      },
      {
        path: "/shopmart",
        element: (
          <Suspense fallback={<h1>its loading wait......</h1>}>
          <ShopMart />
          </Suspense>
        ),
      },
    ],
     errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

export default App;
