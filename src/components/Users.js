import { useState, useEffect } from "react";
import User from "./User.js"
import axios from "axios";
import { response } from "express";
// import "./css/Users.css"

const API = process.env.REACT_APP_API_URL;
// console.log(API)

function Transactions() {
  const [Users, setUsers] = useState([]);
  console.log(API)
  
  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((response) => setUsers(response.data))
      console.log(response)
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="users">
      <section>
      {Users.map((user, index) => {
        return <User key={index} user={user} index={index} />;
      }
      </section>
    </div>
  );
}

export default Transactions;
