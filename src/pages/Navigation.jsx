import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "../styles/home.css";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Button className="nav-button" onClick={() => navigate("/")}>Login</Button>
            <Button className="nav-button" onClick={() => navigate("/Home")}>Home</Button>
            <Button className="nav-button" onClick={() => navigate("/Academics")}>Academics</Button>
            <Button className="nav-button" onClick={() => navigate("/Performance")}>Performance</Button>

            
        </div>
    );
}
