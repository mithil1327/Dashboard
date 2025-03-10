import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import "../styles/login.css";

export default function Login() {
  const { username, password, setUsername, setPassword } = useStore();
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/Home");
    } else {
      alert("Please enter a valid username and password");
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={handlelogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}