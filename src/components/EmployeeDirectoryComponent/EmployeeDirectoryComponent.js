import React, { useEffect, useState } from 'react';
import './EmployeeDirectoryComponent.css'; 

function EmployeeDirectoryComponent() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/v1/employee/');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.employeeID}>
          <p>Employee ID: {employee.employeeID}</p>
          <p>Name: {employee.employeeName}</p>
          <p>Age: {employee.employeeAge}</p>
          <p>Date of Birth: {employee.dateOfBirth}</p>
          <p>Email: {employee.employeeEmail}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeDirectoryComponent;
