import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    employeeName: "",
    expenseType: "",
    reportPeriod: "",
    fromDate: "",
    toDate: "",
    amountRange: "",
    minAmount: "",
    maxAmount: "",
    reportType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add submission logic (e.g., API call) here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Report Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Employee Name */}
          <div>
            <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
              Employee Name
            </label>
            <input
              type="text"
              id="employeeName"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
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
          {/* Report Period */}
          <div>
            <label htmlFor="reportPeriod" className="block text-sm font-medium text-gray-700">
              Report Period
            </label>
            <input
              type="text"
              id="reportPeriod"
              name="reportPeriod"
              value={formData.reportPeriod}
              onChange={handleChange}
              placeholder="e.g., Q1 2024"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* From Date */}
          <div>
            <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
              From Date
            </label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* To Date */}
          <div>
            <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
              To Date
            </label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Amount Range */}
          <div>
            <label htmlFor="amountRange" className="block text-sm font-medium text-gray-700">
              Amount Range
            </label>
            <select
              id="amountRange"
              name="amountRange"
              value={formData.amountRange}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            >
              <option value="">Select range</option>
              <option value="low">Low (0 - 1000)</option>
              <option value="medium">Medium (1000 - 5000)</option>
              <option value="high">High (5000+)</option>
            </select>
          </div>
          {/* Minimum Amount */}
          <div>
            <label htmlFor="minAmount" className="block text-sm font-medium text-gray-700">
              Minimum Amount
            </label>
            <input
              type="number"
              id="minAmount"
              name="minAmount"
              value={formData.minAmount}
              onChange={handleChange}
              placeholder="Enter minimum amount"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Maximum Amount */}
          <div>
            <label htmlFor="maxAmount" className="block text-sm font-medium text-gray-700">
              Maximum Amount
            </label>
            <input
              type="number"
              id="maxAmount"
              name="maxAmount"
              value={formData.maxAmount}
              onChange={handleChange}
              placeholder="Enter maximum amount"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Report Type */}
          <div>
            <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
              Report Type
            </label>
            <select
              id="reportType"
              name="reportType"
              value={formData.reportType}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            >
              <option value="">Select type</option>
              <option value="excel">Excel</option>
              <option value="text">Text Document</option>
              <option value="pdf">PDF</option>
            </select>
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

export default ReportForm;
