import "../css/Home.css";
import House from "./House.js";

function Home() {
    return (
        <div className="max-container">
            <h1>
                <img
                    src="https://see.fontimg.com/api/renderfont4/MVZ6w/eyJyIjoiZnMiLCJoIjo2OSwidyI6MTAwMCwiZnMiOjY5LCJmZ2MiOiIjRDBBQjIyIiwiYmdjIjoiI0YzMTkxOSIsInQiOjF9/V2VsY29tZSB0byBIb2d3YXJ0cw/harry-p.png"
                    alt="Harry Potter fonts"
                ></img>
            </h1>

            <div className="house-list">
                <House
                    imgURL="https://i.pinimg.com/originals/05/fe/a7/05fea7e886d20a43dca6ba9b3bb335ce.jpg"
                    name="Gryffindor"
                    description="Gryffindor values bravery, daring, nerve, and chivalry."
                />
                <House
                    imgURL="https://i.pinimg.com/originals/8f/0c/8d/8f0c8d13613ae7533fbabec3ad4046f2.jpg"
                    name="Hufflepuff"
                    description="Hufflepuff values hard work, dedication, patience, loyalty, and fair play."
                />
                <House
                    imgURL="https://www.kindpng.com/picc/m/727-7276623_ravenclaw-logo-hd-png-download.png"
                    name="Hufflepuff"
                    description="Ravenclaw values intelligence, knowledge, curiosity, creativity and wit."
                />
                <House
                    imgURL="https://i.pinimg.com/originals/de/d8/7e/ded87e4b3dad3327988511af87724206.jpg"
                    name="Slytherin"
                    description="Slytherin House values ambition, leadership, self-preservation, cunning and resourcefulness and was founded
                        by Salazar Slytherin."
                />
            </div>
        </div>
    );
}

export default Home;
