import React, { useState, useRef } from "react";
import BuddyList from "./BuddyList";

function StudyGroup() {
    const initial = [
        {
            name: "Harry Potter",
            imgURL: "https://static.wikia.nocookie.net/23b32650-e2fd-4b44-bbc5-41d74b5ff6c3",
        },
        {
            name: "Hermione Granger",
            imgURL: "https://img.24sata.hr/zKPRk4Q2jaPf8ufhvHMoylLqvNM=/1920x0/smart/media/images/src/20131041/1700ee608d7ccb3ad9c2fac71bbf79cc.jpg",
        },
        {
            name: "Ronald Weasley",
            imgURL: "https://images.ctfassets.net/usf1vwtuqyxm/4kRGmTOvVYmIwsOikwcuUw/b0851098837ddac5951a15ebc2ab82cf/Ron_Weasley_WB_F1_Ron_with_Scabbers_on_shoulder_00393692.jpg",
        },
        {
            name: "Malfoy Draco",
            imgURL: "https://cdn.newsapi.com.au/image/v1/a1d257d1618b572e1b81dc99134d8a06?width=316",
        },
    ];
    const [buddyList, setBuddyList] = useState(initial);
    const inputName = useRef(null);

    function addCard(event) {
        console.log(event.target.value);
        setBuddyList(
            buddyList.concat({
                name: "Malfoy D",
                imgURL: "https://cdn.newsapi.com.au/image/v1/a1d257d1618b572e1b81dc99134d8a06?width=316",
            })
        );
    }
    function removeCard() {}
    function removeAll() {
        setBuddyList([]);
    }

    return (
        <div className="card-selection">
            <form id="card-selection-form">
                <div className="card-input-wrapper">
                    <label id="name-label" forhtml="card-name">
                        Buddy Name:
                    </label>
                    <br />
                    <input ref={inputName} type="text" id="card-name" name="cname" />
                    <br />
                </div>
                <div className="card-input-wrapper">
                    <label id="url-label" forhtml="card-URL">
                        Address (URL):
                    </label>
                    <br />
                    <input type="text" id="card-URL" name="url" />
                    <br />
                    <br />
                </div>
                <div className="flex right">
                    <button onClick={() => addCard()} className="btn btn-add" type="button">
                        Add
                    </button>
                    <button onClick={() => removeCard()} className="btn btn-remove" type="button">
                        Remove
                    </button>
                    <button onClick={() => removeAll()} className="btn btn-remove-all" type="button">
                        Clear
                    </button>
                </div>
            </form>

            <div className="card-deck" id="img-container">
                <BuddyList buddyList={buddyList} />
            </div>
        </div>
    );
}

export default StudyGroup;
