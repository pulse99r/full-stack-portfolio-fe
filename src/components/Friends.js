import './css/Friends.css'

import { useState, useEffect } from "react";
import Friend from "./Friend"
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
// console.log("API 1:==>",API)

function Friends() {
  const [friends, setFriends] = useState([]);

 useEffect(() => {
  axios
    .get(`${API}/users`)
    .then((response) => setFriends(response.data))
    .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="friends">
      <section>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend, id) => {
              return <Friend key={id} friend={friend} id={id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Friends;