import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import { Main,Login,Signup,ResumeAnalyse } from './components/index.js'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
         path:'/',
         element:<Main/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/resume-analyse',
        element:<ResumeAnalyse/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
