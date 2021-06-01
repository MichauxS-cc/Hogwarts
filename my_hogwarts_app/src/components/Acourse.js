import "../css/Acourse.css";

function Acourse(props) {
    return (
        <div className="course-container" id={props.name}>
            <div className="course-wrapper">
                <img className="course-img" src={props.imgURL} alt={props.name} />
                <div className="course-description">{props.description}</div>
            </div>
        </div>
    );
}

export default Acourse;
