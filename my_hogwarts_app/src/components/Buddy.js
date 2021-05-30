function Buddy(props) {
    return (
        <div className="buddy-container">
            <div className="buddy-wrapper">
                <img src={props.imgURL} alt="blah" className="img" />
                <div className="buddy-name">{props.name}</div>
            </div>
        </div>
    );
}

export default Buddy;
