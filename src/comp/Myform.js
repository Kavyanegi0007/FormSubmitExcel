import React, { useState } from 'react';
import * as XLSX from 'xlsx';


const MyForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    query: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log('Form submitted:', formData);
    // You can also make an API call or perform other operations with the form data
  };

  // Function to export form data to Excel
  const exportToExcel = () => {
    const data = [formData]; // Form data to be exported
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'FormData');
    XLSX.writeFile(wb, 'formData.xlsx');
  };

  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="query" className="form-label">Write your concern below</label>
              <textarea
                className="form-control"
                id="query"
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-primary me-2" type="submit">Submit</button>
            <button className="btn btn-success" onClick={exportToExcel}>Export to Excel</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyForm;
