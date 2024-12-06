import React, { useState } from "react";

function ExpensesForm() {
  const [formData, setFormData] = useState({
    expenseType: "",
    expenseDate: "",
    expenseAmount: "",
    colleagueName: "",
    remarks: "",
    attachBill: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachBill") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Expenses Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Expense Type */}
          <div>
            <label htmlFor="expenseType" className="block text-sm font-medium text-gray-700">
              Expense Type
            </label>
            <input
              type="text"
              id="expenseType"
              name="expenseType"
              value={formData.expenseType}
              onChange={handleChange}
              placeholder="Enter expense type"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Expense Date */}
          <div>
            <label htmlFor="expenseDate" className="block text-sm font-medium text-gray-700">
              Expense Date
            </label>
            <input
              type="date"
              id="expenseDate"
              name="expenseDate"
              value={formData.expenseDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Expense Amount */}
          <div>
            <label htmlFor="expenseAmount" className="block text-sm font-medium text-gray-700">
              Expense Amount
            </label>
            <input
              type="number"
              id="expenseAmount"
              name="expenseAmount"
              value={formData.expenseAmount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Colleague Name */}
          <div>
            <label htmlFor="colleagueName" className="block text-sm font-medium text-gray-700">
              Colleague Name
            </label>
            <input
              type="text"
              id="colleagueName"
              name="colleagueName"
              value={formData.colleagueName}
              onChange={handleChange}
              placeholder="Enter colleague's name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Remarks */}
          <div>
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter remarks"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            ></textarea>
          </div>
          {/* Attach Bill */}
          <div>
            <label htmlFor="attachBill" className="block text-sm font-medium text-gray-700">
              Attach Bill
            </label>
            <input
              type="file"
              id="attachBill"
              name="attachBill"
              accept="image/*,application/pdf"
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpensesForm;
