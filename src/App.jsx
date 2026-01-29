import React from "react";
import { Routes, Route, Navigate, useLocation, Outlet, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { AllLeads } from "./pages/leads/AllLeads";
import LeadDetails from "./pages/leads/LeadDetails";
import "./App.css";

export const App = () => {
  const location = useLocation();

  // Detect leads routes
  const isLeadsPage = location.pathname.startsWith("/dashboard/leads");

  return (
    <div className="min-h-screen">
      {/* Show Header only if NOT leads page */}
      {!isLeadsPage && <Header />}

      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  School Management System
                </h1>
                <Link
                  to="/dashboard"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          }
        />

        {/* Dashboard Layout */}
        <Route
          path="/dashboard"
          element={isLeadsPage ? <Outlet /> : <Sidebar />}
        >
          <Route index element={<Dashboard />} />

          {/* Leads routes (no sidebar + no header) */}
          <Route path="leads">
            <Route path="all" element={<AllLeads />} />
            <Route path="all/:id" element={<LeadDetails />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};
