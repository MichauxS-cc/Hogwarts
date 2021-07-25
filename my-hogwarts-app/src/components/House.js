import "../css/House.css";

function House(props) {
    return (
        <div className="house-container" id={props.name}>
            <div className="house-wrapper">
                <img className="house-img" src={props.imgURL} alt={props.name} />
                <div className="house-description">{props.description}</div>
            </div>
        </div>
    );
}

export default House;
