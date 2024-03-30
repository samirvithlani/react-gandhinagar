import logo from "./logo.svg";
import "./App.css";
import {Header} from './Header'
import Footer from "./Footer";
import { Content } from "./Content";
import { UseStateDemo } from "./UseStateDemo";
import { Users } from "./users/Users";

function App() {
  
  var title = "React JS";  
  var users = {
    id:102,
    name:"Amit"
  }
  var copyright = "© 2021"

  return (
    <div className="App">
      <Header title = {title} copyright = {copyright}></Header>
      <Users/>
      {/* <Content data = {users}></Content> */}
      {/* <UseStateDemo/> */}
      <Footer copy = {copyright}></Footer>
    </div>
  );
}

export default App;
