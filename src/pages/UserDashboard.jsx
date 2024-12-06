import React from 'react';
import { Link } from 'react-router-dom'; // Use this if using React Router for navigation

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <button className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-400 transition">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Welcome, [User Name]!</h2>
          <p className="text-gray-600">Here's a quick overview of your dashboard.</p>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Profile Details</h3>
            <p className="text-gray-600">View and update your profile information.</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition">
              Manage Profile
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Travel Form</h3>
            <p className="text-gray-600">Fill out your travel-related details here.</p>
            <Link to="/travel">
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition">
                Go to Travel Form
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Expense Form</h3>
            <p className="text-gray-600">Submit and manage your expenses here.</p>
            <Link to="/expense">
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition">
                Go to Expense Form
              </button>
            </Link>
          </div>
        </section>

        {/* Activity Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between items-center">
              <span>Completed Task: "Submit Travel Request"</span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span>Updated Expense Details</span>
              <span className="text-gray-500 text-sm">5 days ago</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span>Logged In</span>
              <span className="text-gray-500 text-sm">1 week ago</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;
