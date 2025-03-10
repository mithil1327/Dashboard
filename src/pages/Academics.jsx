import Navbar from "../pages/Navigation";
import "../styles/academics.css";
import { RxCross2 } from "react-icons/rx";
export default function Academics() {
    return (
        <div className="academics-container">
            <Navbar />
        <div className="se">
            <span id="sm"><strong>Semester Results</strong></span>
            <div className="line"></div>
            <div id="cro"><RxCross2 /></div>
            <div id="tex"><span><strong>No Semester Record Found!</strong></span></div>
            <div className="line2"></div>
        </div>
        <div class="im">
        <span class="title"><strong>Internal Marks</strong></span>
        <div class="mh">
            <div><strong>Course Code</strong></div>
            <div><strong>Course Name</strong></div>
            <div><strong>Semester</strong></div>
            <div><strong>Marks Obtained</strong></div>
        </div>
        <div class="mg">
            <div>22CH103</div>
            <div>ENGINEERING CHEMISTRY I</div>
            <div>1</div>
            <div>47</div>
        </div>
        <div class="mg">
            <div>22GE001</div>
            <div>FUNDAMENTALS OF COMPUTING</div>
            <div>1</div>
            <div>37</div>
        </div>
        <div class="mg">
            <div>22GE004</div>
            <div>BASICS OF ELECTRONICS ENGINEERING</div>
            <div>1</div>
            <div>46</div>
        </div>
        <div class="mg">
            <div>22MA101</div>
            <div>ENGINEERING MATHEMATICS I</div>
            <div>1</div>
            <div>39</div>
        </div>
        <div class="mg">
            <div>22PH102</div>
            <div>ENGINEERING PHYSICS</div>
            <div>1</div>
            <div>47</div>
        </div>
        </div>
        {/* <div className="sp">
            <div id="spd">Student Project Details</div>
        </div> */}
        </div>
    );
}
