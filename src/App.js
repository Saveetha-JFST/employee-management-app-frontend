import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeRegistrationComponent from './components/EmployeeRegistrationComponent/EmployeeRegistrationComponent';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import EmployeeDirectoryComponent from "./components/EmployeeDirectoryComponent/EmployeeDirectoryComponent";
import EmployeeDeletionComponent from "./components/EmployeeDeletionComponent/EmployeeDeletionComponent";

function App() {
  return (
    <Router>
            <div className="container">
              <HeaderComponent/>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Employee</Link>
                <Link to="/admin/delete" >Delete Employee</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<EmployeeDirectoryComponent/>}></Route>
                 <Route path='/admin/add' element={<EmployeeRegistrationComponent/>}></Route>
                 <Route path='/admin/delete' element={<EmployeeDeletionComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
