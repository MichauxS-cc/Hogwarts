import "../css/Buddy.css";
import { useDispatch } from "react-redux";
import { setModal } from "../actions";

function Buddy(props) {
  const dispatch = useDispatch();

  return (
    <div
      className="buddy-container"
      onClick={() =>
        dispatch(
          setModal({
            name: props.name,
            imgURL: props.imgURL,
            description: props.description,
            _id: props._id,
          })
        )
      }
    >
      <div className="buddy-wrapper">
        <img className="buddy-img" src={props.imgURL} alt={props.name} />
        <div className="buddy-name">{props.name}</div>
      </div>
    </div>
  );
}

export default Buddy;
