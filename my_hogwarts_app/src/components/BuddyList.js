import Buddy from "./Buddy.js";

function BuddyList(props) {
    return (
        <div className="card-deck" id="img-container">
            {props.buddyList.map((buddy) => {
                return (
                    <Buddy
                        key={buddy.name}
                        name={buddy.name}
                        imgURL={buddy.imgURL}
                        description={buddy.description}
                        showModal={props.showModal}
                    />
                );
            })}
        </div>
    );
}

export default BuddyList;
