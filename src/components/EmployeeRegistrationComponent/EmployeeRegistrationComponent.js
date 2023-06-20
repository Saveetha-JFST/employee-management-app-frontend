import React, { useState } from 'react';
import './EmployeeRegistrationComponent.css'

function EmployeeRegistrationComponent() {
  const [employee, setEmployee] = useState({
    employeeName: '',
    dateOfBirth: '',
    employeeEmail: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    await fetch('http://localhost:8082/api/v1/employee/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    })
        .then((response) => {
            if (response.status == 500)
            {
                alert(`Error!`)
            }
            else{
                alert(`Data of ${employee.employeeName} is added successfully`)
                window.location.href = '/'
            }
        })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee Name:
        <input
          type="text"
          name="employeeName"
          value={employee.employeeName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={employee.dateOfBirth}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Employee Email:
        <input
          type="email"
          name="employeeEmail"
          value={employee.employeeEmail}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeRegistrationComponent;

