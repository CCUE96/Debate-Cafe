import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/client';
import ErrorPage from './pages/ErrorPage.jsx';
// import './index.css';
import App from './App.jsx';
import Homepage from './pages/homepage.jsx';
import DebatePage from './pages/debatespage.jsx';
import NewsSearchPage from './pages/NewsSearchPage.jsx';
import LoginPage from './pages/loginpage.jsx';
import RegisterPage from './pages/registerpage.jsx';
import AboutPage from './pages/aboutme.jsx';
// import Donations from './pages/Donations'

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
        path: '/debates/:id',
        element: <DebatePage />
      },
      {
        path: '/search',
        element: <NewsSearchPage />
      },
      {
        path: '/home',
        element: <Homepage/>
      },
      {
        path: '/register',
        element: <RegisterPage/>
      },
      {
        path: '/about',
        element: <AboutPage/>
      },
      // {
      //   path:'https://donate.stripe.com/test_9AQ1675Mn5L57fO144',
      //   element: <Donations />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
