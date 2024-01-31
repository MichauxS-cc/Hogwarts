import "../css/Courses.css";
import CourseSlider from "./CourseSlider";
import React from 'react';


function Courses() {
    return (
        <div className="max-container">
            <h1>
                <div>
                    <img
                        className="header-img"
                        src="https://see.fontimg.com/api/renderfont4/MVZ6w/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTAwMCwiZnMiOjg1LCJmZ2MiOiIjRDBBQjIyIiwiYmdjIjoiI0YzMTkxOSIsInQiOjF9/Q29yZSBDbGFzc2Vz/harry-p.png"
                        alt="Harry Potter fonts"
                    ></img>
                </div>
            </h1>

            <div className="course-list">
                <CourseSlider />
            </div>
        </div>
    );
}

export default Courses;
