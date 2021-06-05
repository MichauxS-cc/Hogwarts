import "../css/About.css";
import Video from "../Hogwarts.mp4";

function About() {
    return (
        // video import funtionality get from "https://www.w3docs.com/snippets/html/how-to-insert-video-in-html.html"
        // Getting Date: 23/5 11:25AM
        <div className="video-container">
            <h1>
                <img
                    className="header-img"
                    src="https://see.fontimg.com/api/renderfont4/MVZ6w/eyJyIjoiZnMiLCJoIjo2NiwidyI6MTAwMCwiZnMiOjY2LCJmZ2MiOiIjRDBBQjIyIiwiYmdjIjoiI0YzMTkxOSIsInQiOjF9/U3RhcnQgWW91ciBMaWZlIENoYW5naW5nIEpvdXJuZXkgV2l0aCBIb2d3YXJ0cw/harry-p.png"
                    alt="Harry Potter fonts"
                ></img>
            </h1>
            <video className="intro-video" controls autoplay source src={Video} type="video/mp4" />
        </div>
    );
}

export default About;
