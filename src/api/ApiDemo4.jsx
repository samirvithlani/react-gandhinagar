import axios from "axios";
import React, { useEffect } from "react";

export const ApiDemo4 = () => {
  const getApi = async () => {
    try {
      const res = await axios.get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5",
        },
      });

      console.log("response..",res.data);
      


    } catch (error) {
        console.log("error..",error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return <div></div>;
};
