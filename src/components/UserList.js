import { useState, useEffect } from "react";
import User from "./User.js"
import axios from "axios";
import { response } from "express";
// import "./css/Users.css"

const API = process.env.REACT_APP_API_URL;
// console.log(API)

function UserList() {
  const [users, setUsers] = useState([]);
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
        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Sent At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => {
              return <User key={id} user={user} id={id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );

}

export default UserList;
