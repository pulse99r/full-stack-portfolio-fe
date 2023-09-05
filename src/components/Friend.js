import "./css/Friend.css";
import { Link } from "react-router-dom";

function Friend ({ friend, id }) {
  return (
    <tr className="friend">
      <td className="msg msg_topic">
        <Link to={`/users/${id}`}>{friend.f_name}</Link>
      </td>
      <td className="msg msg_sent_at">
        <Link to={`/users/${id}`}>{friend.l_name}</Link>
      </td>
  
    </tr>
  );
}

export default Friend;
