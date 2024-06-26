import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'


import './index.css'

import App from './App.jsx'
import Homepage from './pages/homepage.jsx'
// import FakeWelcomeCard from './components/fakeWelcomeCard.jsx'
// import DebateCard from './components/debateCard.jsx'
import DebatePage from './pages/debatespage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: 'debates',
        element: <DebatePage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
