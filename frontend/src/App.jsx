import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRotes from './routes/ProtectedRotes';
import AdminDashboard from './pages/AdminDashboard';
import Unautharized from './pages/Unautharized';
import RolesRoute from './routes/RolesRoute';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<RootLayout />} >
    <Route index element={<Home />} /> {/* home page */}
    <Route path="login" element={<Login />} />
    <Route path="/unauthorized" element={<Unautharized />} />
    <Route path="register" element={<Register />} />
    <Route path="admindashboard" element={
      <ProtectedRotes>
        <RolesRoute allowedRoles={['admin']}>
        <AdminDashboard />
      </RolesRoute>
      </ProtectedRotes>
      
    } />
    <Route path="dashboard" element={<ProtectedRotes>
      <RolesRoute allowedRoles={['user']}>
        <Dashboard />
      </RolesRoute>
    </ProtectedRotes>} />
  </Route>))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
