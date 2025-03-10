import Navbar from "../pages/Navigation";
import "../styles/performance.css";
import { HiTrophy } from "react-icons/hi2";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { FaBoxArchive } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { HiBriefcase } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { IoIosTrendingUp } from "react-icons/io";
export default function Performance() {
    return (
        <div className="performance-container">
            <Navbar />
            <div className="technical-competition"><span id="icon"><HiTrophy /></span><span id="heading">Technical Competition</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
            <div className="paper-presentation"><span id="icon"><AiOutlineFileText /></span><span id="heading">Paper Presentation</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
            <div className="project-competition"><span id="icon"><AiOutlineSetting /></span><span id="heading">Project Competition</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
            <div className="product-development"><span id="icon"><FaBoxArchive /></span><span id="heading">Product Development</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
            <div className="patent"><span id="icon"><IoShieldCheckmark /></span><span id="heading">Patent</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
            <div className="internship"><span id="icon"><HiBriefcase /></span><span id="heading">Internship</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
            <div className="online-course"><span id="icon"><FaGraduationCap /></span><span id="heading">Online Course</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
            <div className="indicator"><span id="icon"><IoIosTrendingUp /></span><span id="heading">Indicator</span><br /><span id="nums">0</span><br /><span id="progress">0 Out of 1 Completed</span></div>
        </div>
    );
}
