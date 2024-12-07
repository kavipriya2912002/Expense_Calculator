import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Use this if using React Router for navigation

function DashboardTravelForm() {
  const [travelForms, setTravelForms] = useState([]);

  // Fetch travel form data when component mounts (with dummy data)
  useEffect(() => {
    // Use dummy data instead of axios call for now
    const dummyData = [
      {
        id: 1,
        user: 'John Doe',
        destination: 'Paris',
        startDate: '2024-12-01',
        endDate: '2024-12-10',
        reason: 'Business Trip',
      },
      {
        id: 2,
        user: 'Jane Smith',
        destination: 'New York',
        startDate: '2024-12-05',
        endDate: '2024-12-12',
        reason: 'Vacation',
      },
      {
        id: 3,
        user: 'Alice Johnson',
        destination: 'Tokyo',
        startDate: '2024-12-10',
        endDate: '2024-12-20',
        reason: 'Conference',
      },
    ];

    // Replace API call with dummy data
    setTravelForms(dummyData);

    // axios.get('/api/travel-forms')
    //   .then(response => {
    //     setTravelForms(response.data); // Set the fetched data to state
    //   })
    //   .catch(error => {
    //     console.error('Error fetching travel forms:', error);
    //   });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Travel Forms Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelForms.length === 0 ? (
          <p className="text-center col-span-full">No travel forms submitted yet.</p>
        ) : (
          travelForms.map((form) => (
            <div
              key={form.id}
              className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
            >
              <h3 className="text-lg font-semibold">{form.user}</h3>
              <p><strong>Destination:</strong> {form.destination}</p>
              <p><strong>Travel Dates:</strong> {form.startDate} to {form.endDate}</p>
              <p><strong>Reason:</strong> {form.reason}</p>
              {/* You can add additional fields here */}
              <div className="mt-4">
                <button className="bg-blue-500 text-white py-2 px-6 rounded-md transition-colors hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DashboardTravelForm;
