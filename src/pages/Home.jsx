import { colors } from "@mui/material";
import myimage from "../assets/profile.jpg"
import Navbar from "../pages/Navigation";
import useStore from "../store/store";
import "../styles/home.css";
import { IoCall } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { IoCalendarSharp } from "react-icons/io5";
import { HiBriefcase } from "react-icons/hi2";
import { RxExit } from "react-icons/rx";
export default function Home() {
    const { username } = useStore();

    return (
        <div className="home-container">
            <Navbar />
            <div className="info">
                <img src={myimage} height="100" className="dp"/>
                <p id="content">
                    {username}
                    <br />
                    <div>7376241CS***</div>
                    <div id="sem">SEMESTER - 2</div>
                    <div id="con">CONTINUING</div>
                    
                </p>
                <div><p id="content2">B.E - COMPUTER SCIENCE AND ENGINEERING</p></div>
                <div><span id="men">Mentor : </span><span id="nm">SATHISHKUMAR P (CS1362)</span><span id="call"><IoCall /></span></div><br />
                <div><span id="men">Special Lab : </span><span id="nm">Not Assigned</span></div><br />
                <div><span id="men">Boarding : </span><span id="nm">-</span></div><br />
                <div><span id="men">Warden : </span><span id="nm">Dr.ASHOKAN S</span><span id="call"><IoCall /></span></div><br />
            </div>
            <div className="attendence">
                <div id="at">Attendence Overview</div>
                <div id="ic1"><span id="icon1"><LuClock3 /></span><span id="to">Total Days <br /><span id="num">12</span></span><span id="iconn1"><IoCalendarSharp /></span><span id="to">Present Days <br /><span id="num">8.5</span></span></div>
                <div id="ic1"><span id="icon2"><HiBriefcase /></span><span id="to">On Duty <br /><span id="num">0</span></span><span id="iconn2"><RxExit /></span><span id="to">Leave<br /><span id="num">3.5</span></span></div>
                <div id="ic1"><span id="icon3"><LuClock3 /></span><span id="to">Percentage<br /><span id="num">70.8</span></span><span id="iconn3"><LuClock3 /></span><span id="to">Today (FN|AN)<br /><span id="num">Holidays|
                    Holidays</span></span></div>
                <div id="ic1"><span id="icon4"><LuClock3 /></span><span id="to">Previous Day<br /><span id="num">AB</span></span></div>
                <div id="note">Note: 80% Attendance is mandatory to appear for End Semester Examination</div>
            </div>
            <div className="sgpa">
            <div id="at">Semester Grade Point Average (SGPA)</div>
            <div id="n">5</div>
            <div id="n">4</div>
            <div id="n">3</div>
            <div id="n">2</div>
            <div id="n">1</div>
            <div id="n">0</div>
            </div>
            <div className="cgpa"><span id="cum">Cumulative Grade Point Average (CGPA)</span><br /><span id="na">NA</span>
            </div>
            <div className="pla"><span id="cum">Placement FA %</span><br /><span id="na">0</span>
            </div>
            <div className="fa"><span id="cum">Formative Assessment (Academic %)(CGPA)</span><br /><span id="na">-</span>
            </div>
            <div className="ac"><span id="cum">Arrear Count</span><br /><span id="na">0</span>
            </div>
            <div className="fs"><span id="cum">Full-Stack Rank</span><br /><span id="na">-</span>
            </div>
            <div className="psg"><span id="cum">PS Grouping</span><br /><span id="na">-</span>
            </div>
            <div className="psr"><span id="cum">PS Rank</span><br /><span id="na">-</span>
            </div>
            
        </div>
    );
}
