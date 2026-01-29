import React from 'react'
import { Routes, Route, Navigate, useLocation, Outlet, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { AllLeads } from './pages/leads/AllLeads';
import LeadDetails from './pages/leads/LeadDetails';
import './app.css';
export const App = () => {
   const location = useLocation();

  // hide sidebar on lead detail page
const hideSidebar = /^\/dashboard\/leads\/all\/[^/]+$/.test(location.pathname);

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  School Management System
                </h1>
                <Link
                  to={'/dashboard'}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/dashboard" element={hideSidebar ? <Outlet /> : <Sidebar />}>
          <Route index element={<Dashboard />} />
        
          <Route path="leads" element={<Outlet />}>
            <Route path='all' element={<AllLeads />} />
            <Route path='all/:id' element={<LeadDetails />} />
          </Route>
        </Route>
        <Route path="project" element={<Outlet />}>
            <Route index element={<h1>Project</h1>} />
            <Route path='all' element={<AllLeads />} />
            <Route path='all/:id' element={<LeadDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </div>
  )
}
