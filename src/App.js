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
import { AboutCompany } from "./employees/AboutCompany";
import { AboutCulture } from "./employees/AboutCulture";
import { AboutCountry } from "./employees/AboutCountry";
import { EmployeeDetail } from "./employees/EmployeeDetail";
import { FormDemo1 } from "./forms/FormDemo1";
import { FormDemo2 } from "./forms/FormDemo2";
import { FormDemo3 } from "./forms/FormDemo3";
import { ApiDemo1 } from "./api/ApiDemo1";
import { UseEffecctDemo } from "./UseEffecctDemo";
import { ApiDemo2 } from "./api/ApiDemo2";
import { ApiDemo3 } from "./api/ApiDemo3";

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
        <Route path = "/aboutus/company" element = {<AboutCompany/>}></Route>
        <Route path = "/aboutculture" element = {<AboutCulture/>}></Route>
        <Route path  = "/aboutus/country" element = {<AboutCountry/>}></Route>
        <Route path = "/empdashboard/detail/:id" element = {<EmployeeDetail/>}></Route>
        <Route path = "/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path = "formdemo2" element ={<FormDemo2/>}></Route>
        <Route path = "/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path = "/apidemo1" element = {<ApiDemo1/>}></Route>
        <Route path = "/apidemo2" element = {<ApiDemo2/>}></Route>
        <Route path = "/apidemo3" element = {<ApiDemo3/>}></Route>
        <Route path  = "/useeffectdemo" element = {<UseEffecctDemo/>}></Route>

        <Route path ="/" element = {<EmployeeHome/>}></Route>
        {/* <Route path ="*" element = {<h1>404 pAGE NOT FOUND...</h1>}></Route> */}
        <Route path="*" element = {<Erro404/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
