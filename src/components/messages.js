import './css/Messages.css';

import { useState, useEffect } from "react";
import Message from "./Message"
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
console.log(API)

function Messages() {
  const [messages, setMessages] = useState([]);
  console.log(API)

 useEffect(() => {
  axios
    .get(`${API}/messages`)
    .then((response) => setMessages(response.data))
    .catch((c) => console.warn("catch", c));
}, []);


  return (
    <div className="messages">
      <section>
        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Sent At</th>
              <th>See this Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, msg_id) => {
              return <Message key={msg_id} message={message} msg_id={msg_id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
// =========================

// =========================
export default Messages;