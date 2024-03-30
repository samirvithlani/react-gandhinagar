import React, { useState } from "react";
import { UserList } from "./UserList";

export const Users = () => {
  // var users = [{}]
  const [users, setusers] = useState([
    {
      id: 1,
      name: "amit",
      age: 23,
    },
    {
      id: 2,
      name: "sumit",
      age: 24,
    },
    {
      id: 3,
      name: "ramit",
      age: 25,
    },
  ]);

  const test = () => {
    alert("parent function");
  };

  const deleteUser = (id) => {
    //id =1 2,3
    var newUsers = users.filter((user) => {
      return user.id !== id;
    });
    //updateing useState
    setusers(newUsers);
  };

  const addUser = (user)=>{
   
        console.log("user....",user)
        //users.push(user) //3 ->4 spread operator
        setusers([...users,user])
  }


  return (
    <div>
      <h1>USERS</h1>
      <UserList users={users} test={test} deleteUser={deleteUser} addUser = {addUser} />
    </div>
  );
};
