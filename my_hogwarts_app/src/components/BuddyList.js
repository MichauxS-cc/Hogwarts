import Buddy from "./Buddy.js";
import { useSelector } from "react-redux";

function BuddyList() {
  const buddyList = useSelector((state) => state.buddyList);

  return (
    <div className="card-deck" id="img-container">
      {buddyList.map((buddy) => {
        return (
          <Buddy
            key={buddy._id}
            name={buddy.name}
            imgURL={buddy.imgURL}
            description={buddy.description}
            _id={buddy._id}
          />
        );
      })}
    </div>
  );
}

export default BuddyList;
