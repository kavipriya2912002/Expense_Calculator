import React, { useState } from "react";

function TravelForm() {
  const [formData, setFormData] = useState({
    purpose: "",
    colleagueName: "",
    date: "",
    projectScope: "",
    noOfPeople: "",
    projectName: "",
    requestorType: "",
    dateOfTravel: "",
    managerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Travel Request Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Purpose */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
              Purpose
            </label>
            <input
              type="text"
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Enter purpose of travel"
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
          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Project Scope */}
          <div>
            <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700">
              Project Scope
            </label>
            <textarea
              id="projectScope"
              name="projectScope"
              value={formData.projectScope}
              onChange={handleChange}
              placeholder="Enter project scope"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            ></textarea>
          </div>
          {/* Number of People */}
          <div>
            <label htmlFor="noOfPeople" className="block text-sm font-medium text-gray-700">
              Number of People
            </label>
            <input
              type="number"
              id="noOfPeople"
              name="noOfPeople"
              value={formData.noOfPeople}
              onChange={handleChange}
              placeholder="Enter number of people"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Project Name */}
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Enter project name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Requestor Type */}
          <div>
            <label htmlFor="requestorType" className="block text-sm font-medium text-gray-700">
              Requestor Type
            </label>
            <select
              id="requestorType"
              name="requestorType"
              value={formData.requestorType}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            >
              <option value="">Select requestor type</option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Contractor">Contractor</option>
            </select>
          </div>
          {/* Date of Travel */}
          <div>
            <label htmlFor="dateOfTravel" className="block text-sm font-medium text-gray-700">
              Date of Travel
            </label>
            <input
              type="date"
              id="dateOfTravel"
              name="dateOfTravel"
              value={formData.dateOfTravel}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          {/* Manager Name */}
          <div>
            <label htmlFor="managerName" className="block text-sm font-medium text-gray-700">
              Manager Name
            </label>
            <input
              type="text"
              id="managerName"
              name="managerName"
              value={formData.managerName}
              onChange={handleChange}
              placeholder="Enter manager's name"
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

export default TravelForm;
