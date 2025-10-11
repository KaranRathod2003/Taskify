import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRotes from './routes/ProtectedRotes';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<RootLayout />} >
    <Route index element={<Home />} /> {/* home page */}
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="dashboard" element={<ProtectedRotes>
      <Dashboard />
    </ProtectedRotes>} />
  </Route>))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
