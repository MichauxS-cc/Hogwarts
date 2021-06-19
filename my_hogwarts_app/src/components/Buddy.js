import "../css/Buddy.css";

function Buddy(props) {
  function handleClick() {
    console.log("name: ", props.name);
    console.log("description: ", props.description);

    props.showModal(props.id);
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
