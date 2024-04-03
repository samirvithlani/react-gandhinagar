import logo from "./logo.svg";
import "./App.css";
import {Header} from './Header'
import Footer from "./Footer";
import { Content } from "./Content";
import { UseStateDemo } from "./UseStateDemo";
import { Users } from "./users/Users";
import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./employees/AboutUs";
import { EmployeeDashboard } from "./employees/EmployeeDashboard";
import { EmployeeHome } from "./employees/EmployeeHome";
import { Erro404 } from "./Erro404";

function App() {
  
  var title = "React JS";  
  var users = {
    id:102,
    name:"Amit"
  }
  var copyright = "© 2021"

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ="/aboutus" element ={<AboutUs/>}></Route>
        <Route path ="/empdashboard" element = {<EmployeeDashboard/>}></Route>
        <Route path ="/" element = {<EmployeeHome/>}></Route>
        {/* <Route path ="*" element = {<h1>404 pAGE NOT FOUND...</h1>}></Route> */}
        <Route path="*" element = {<Erro404/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
