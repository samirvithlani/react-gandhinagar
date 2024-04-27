import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomeLoder } from "../CustomeLoder";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false)

  const getApiData = async () => {
    setisLoading(true)
    const users = await axios.get("https://node5.onrender.com/user/user");
  
    console.log("api response axios...", users.data);
    console.log("api response axios...", users.status);
    setusers(users.data.data);
    setisLoading(false)
  };

  useEffect(() => {
    
    getApiData();
    
  }, [])
  
  return (
    <div>
        {
            isLoading && <CustomeLoder/>
        }
      <h1>API DEMO 1</h1>
      {/* <button
        onClick={() => {
          getApiData();
        }}
      >
        Get API Data
      </button> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
