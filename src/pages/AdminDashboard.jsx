import React from 'react';
import { Link } from 'react-router-dom'; // Use this if using React Router for navigation

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Welcome, Admin!</h2>
          <p className="text-gray-600">Manage system settings, users, and reports here.</p>
        </section>

        {/* Admin Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-gray-600">View and manage all users.</p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
              Manage Users
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <p className="text-gray-600">Generate and download reports.</p>
            <Link to="/report">
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
              Create Reports
            </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Travel Details</h3>
            <p className="text-gray-600">Generate and download reports.</p>
            <Link to="/travelcard">
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
              View Travel Details
            </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Expense Details</h3>
            <p className="text-gray-600">Generate and download reports.</p>
            <Link to="/expensecard">
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
              View Expense Details
            </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">System Settings</h3>
            <p className="text-gray-600">Update application settings and configurations.</p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
              Update Settings
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
