import React from 'react';

function ManagerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manager Dashboard</h1>
          <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-400 transition">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Welcome, Manager!</h2>
          <p className="text-gray-600">Track projects, assign tasks, and review team performance.</p>
        </section>

        {/* Manager Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Team Overview</h3>
            <p className="text-gray-600">View the status of your team members and their tasks.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">
              View Team
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Project Management</h3>
            <p className="text-gray-600">Create, assign, and monitor project progress.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">
              Manage Projects
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Performance Reports</h3>
            <p className="text-gray-600">Review team performance and generate reports.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">
              View Reports
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ManagerDashboard;
