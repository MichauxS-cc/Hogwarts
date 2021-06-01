import "../css/Buddy.css";

function Buddy(props) {
    function handleClick() {
        props.showModal(props.name, props.imgURL, props.description);
    }

    return (
        <div className="buddy-container" onClick={handleClick}>
            <div className="buddy-wrapper">
                <img className="buddy-img" src={props.imgURL} alt={props.name} />
                <div className="buddy-name">{props.name}</div>
            </div>
        </div>
    );
}

export default Buddy;
