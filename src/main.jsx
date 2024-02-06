import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import IpdAddmision from './Components/IpdAddmision.jsx'
import OpdAddmision from './Components/OpdAddmision.jsx'
import Mis from './Components/Mis.jsx'
import IpdBilling from './Components/IpdBilling.jsx'
import LabEntry from './Components/LabEntry.jsx'
import NewLabEntry from './Components/lab/NewLabEntry.jsx'
import OpdLabEntry from './Components/lab/OpdLabEntry.jsx'
import IpdLabEntry from './Components/lab/IpdLabEntry.jsx'
const router= createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/ipdAddmision",
          element: <IpdAddmision />
        },
        {
          path: "/opdAddmision",
          element: <OpdAddmision />
        },
        {
          path: "/ipdBilling",
          element: <IpdBilling />
        },
        {
          path: "/labEntry",
          element: <LabEntry />
        },
        {
          path: "/mis",
          element: <Mis />
        },
        {
          path: "/newLabEntry",
          element: <NewLabEntry />
        },
        {
          path: "/opdLabEntry",
          element: <OpdLabEntry />
        },
        {
          path: "/ipdLabEntry",
          element: <IpdLabEntry />
        },
       

      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
