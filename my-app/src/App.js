import React,{Component} from "react";
import Users from "./components/Users";
import './App.css';
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

class App extends Component{

  render(){

    return (
       <div className="container">
        {/* <Test test="deneme"></Test> */}
       <Navbar title="User App"/><hr></hr>
       <AddUser></AddUser>
       <Users/>
       </div>

    );
  }
}

export default App;
