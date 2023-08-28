import "./css/Message.css";
import { Link } from "react-router-dom";

function Message({ message, msg_id }) {
  return (
    <tr className="message">
      <td className="msg msg_topic">
        <Link to={`/messages/${msg_id}`}>{message.topic}</Link>
      </td>
      <td className="msg msg_sent_at">
        <Link to={`/messages/${msg_id}`}>{message.sent_at}</Link>
      </td>
  
    </tr>
  );
}

export default Message;
