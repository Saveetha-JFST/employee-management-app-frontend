import React, { useState } from 'react';
import './EmployeeDeletionComponent.css'

function EmployeeDeletionComponent() {
  const [employeeID, setEmployeeID] = useState('');

  const handleChange = (event) => {
    setEmployeeID(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    await fetch(`http://localhost:8082/api/v1/employee/${employeeID}`,{
      method: 'DELETE'
    })
    .then((response) => {
            if (response.status == 500)
            {
                alert(`Error!`)
            }
            else{
                alert(`Data deleted successfully`)
                window.location.href = '/'
            }
        })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee ID:
        <input
          type="number"
          name="employeeID"
          value={employeeID}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeDeletionComponent;

