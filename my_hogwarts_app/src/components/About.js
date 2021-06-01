import "../css/About.css";
import Video from "../Hogwarts.mp4";

function About() {
    return (
        // video import funtionality get from "https://www.w3docs.com/snippets/html/how-to-insert-video-in-html.html"
        // Getting Date: 23/5 11:25AM
        <div className="video-container">
            <p>
                <strong>Start your life change journy with Hogwarts</strong>
            </p>
            <video className="intro-video" controls autoplay source src={Video} type="video/mp4" />
        </div>
    );
}

export default About;
