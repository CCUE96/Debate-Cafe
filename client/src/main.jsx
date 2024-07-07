import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
// import './index.css';
import App from './App.jsx';
import Homepage from './pages/homepage.jsx';
import DebatePage from './pages/debatespage.jsx';
import NewsSearchPage from './pages/NewsSearchPage.jsx';
import LoginPage from './pages/loginpage.jsx';
import RegisterPage from './pages/registerpage.jsx';
import AboutPage from './pages/aboutme.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: 'debates',
        element: <DebatePage />
      },
      {
        path: 'search',
        element: <NewsSearchPage />
      },
      {
        path: 'home',
        element: <Homepage/>
      },
      {
        path: 'register',
        element: <RegisterPage/>
      },
      {
        path: 'about',
        element: <AboutPage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);