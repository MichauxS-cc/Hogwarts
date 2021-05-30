import Buddy from "./Buddy.js";

function BuddyList(props) {
    return props.buddyList.map((buddy) => {
        return <Buddy key={buddy.name} name={buddy.name} imgURL={buddy.imgURL} />;
    });
}

export default BuddyList;
