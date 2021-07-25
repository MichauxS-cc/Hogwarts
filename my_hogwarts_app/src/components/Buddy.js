import "../css/Buddy.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal, setBuddyList } from "../actions";
import axios from "axios";

function Buddy(props) {
  const buddyListURL = "/db/buddy";

  const dispatch = useDispatch();
  const buddyList = useSelector((state) => state.buddyList);

  async function removeBuddy(buddyId) {
    const response = await axios.delete(buddyListURL + "/deleteById/", {
      params: { _id: buddyId },
    });
    if (response && response.data) dispatch(setBuddyList(response.data));
  }
  return (
    <div className="buddy-container">
      <button
        onClick={() => removeBuddy(props._id)}
        className="remove-buddy-btn"
      >
        -
      </button>
      <div
        className="buddy-wrapper"
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
        <img className="buddy-img" src={props.imgURL} alt={props.name} />
        <div className="buddy-name">{props.name}</div>
      </div>
    </div>
  );
}

export default Buddy;
