import React, { useEffect, useState } from 'react';

function DashboardExpenseForm() {
  const [expenseForms, setExpenseForms] = useState([]);

  // Fetch expense form data when component mounts (with dummy data)
  useEffect(() => {
    // Use dummy data instead of axios call for now
    const dummyData = [
      {
        id: 1,
        user: 'John Doe',
        amount: '$500',
        category: 'Travel',
        date: '2024-12-01',
        description: 'Flight and hotel for business trip to Paris',
      },
      {
        id: 2,
        user: 'Jane Smith',
        amount: '$200',
        category: 'Food',
        date: '2024-12-05',
        description: 'Meals during vacation in New York',
      },
      {
        id: 3,
        user: 'Alice Johnson',
        amount: '$300',
        category: 'Conference',
        date: '2024-12-10',
        description: 'Conference registration and travel expenses',
      },
    ];

    // Replace API call with dummy data
    setExpenseForms(dummyData);

    // axios.get('/api/expense-forms')
    //   .then(response => {
    //     setExpenseForms(response.data); // Set the fetched data to state
    //   })
    //   .catch(error => {
    //     console.error('Error fetching expense forms:', error);
    //   });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Expense Forms Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expenseForms.length === 0 ? (
          <p className="text-center col-span-full">No expense forms submitted yet.</p>
        ) : (
          expenseForms.map((form) => (
            <div
              key={form.id}
              className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
            >
              <h3 className="text-lg font-semibold">{form.user}</h3>
              <p><strong>Amount:</strong> {form.amount}</p>
              <p><strong>Category:</strong> {form.category}</p>
              <p><strong>Date:</strong> {form.date}</p>
              <p><strong>Description:</strong> {form.description}</p>
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

export default DashboardExpenseForm;
