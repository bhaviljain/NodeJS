import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/login'
import Registration from './components/registration'
import Home from './components/Home'

function App() {

const router = createBrowserRouter([
  {
   path:"/",
   element:<Home />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/registration",
    element:<Registration />
  }

])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
