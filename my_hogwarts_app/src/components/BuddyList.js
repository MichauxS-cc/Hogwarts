import Buddy from "./Buddy.js";
import { v4 as uuidv4 } from "uuid";

function BuddyList(props) {
  return (
    <div className="card-deck" id="img-container">
      {props.buddyList.map((buddy) => {
        return (
          <Buddy
            key={uuidv4()}
            name={buddy.name}
            imgURL={buddy.imgURL}
            description={buddy.description}
            id={buddy._id}
            showModal={props.showModal}
          />
        );
      })}
    </div>
  );
}

export default BuddyList;
