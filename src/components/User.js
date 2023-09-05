
// import "./css/User.css";
import { Link } from "react-router-dom";

function User ({ user, id }) {
  return (
    <tr className="user">
      <td className="msg msg_topic">
        <Link to={`/users/${id}`}>{user.f_name}</Link>
      </td>
      <td className="msg msg_sent_at">
        <Link to={`/users/${id}`}>{user.l_name}</Link>
      </td>
  
    </tr>
  );
}

export default User;
