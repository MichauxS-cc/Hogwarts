import React, { useState, useRef, useEffect } from "react";
import "../css/StudyGroup.css";
import BuddyList from "./BuddyList.js";
import Modal from "./Modal.js";

function StudyGroup() {
    const [buddyList, setBuddyList] = useState([]);
    const inputName = useRef(); //to get user input
    const inputImgURL = useRef();
    const inputDescription = useRef();
    const buddyListURL = "http://localhost:3000/buddies";

    const [modal, setModal] = useState({ visible: false, name: "", imgURL: "", description: "" });

    useEffect(() => {
        fetch(buddyListURL)
            .then((response) => response.json())
            .then((buddyListData) => {
                setBuddyList(buddyListData); //set buddyList with buddyListData
            });
    }, []); // on first refresh

    // add card to buddyList by creating a new array with the new user input
    // input: name, imgURL
    function addCard() {
        let name = inputName.current.value;
        let imgURL = inputImgURL.current.value;
        let description = inputDescription.current.value;

        if (name === "" || imgURL === "") return;

        fetch(buddyListURL + "/add", {
            method: "POST",
            body: JSON.stringify({ name: name, imgURL: imgURL, description: description }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((buddyListData) => {
                // console.log("result>>>>>>>>>>>>>>>>>>", result);
                setBuddyList(buddyListData);
            });

        inputName.current.value = inputImgURL.current.value = inputDescription.current.value = null;
    }

    function removeCard() {
        let removeName = inputName.current.value;

        // create a new buddy list by filtering out the buddy with the given removeName
        // let newBuddyList = [...buddyList].filter((buddy) => {
        //     if (buddy.name !== removeName) return buddy;
        // });

        // setBuddyList(newBuddyList);

        fetch(buddyListURL + "/delete", {
            method: "DELETE",
            body: JSON.stringify({ removeName }),
            headers: {
                // "Access-Control-Allow-Credentials": true,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((buddyListData) => {
                // console.log("result>>>>>>>>>>>>>>>>>>", result);
                setBuddyList(buddyListData);
            });

        inputName.current.value = inputImgURL.current.value = inputDescription.current.value = null;
    }

    function clearInput() {
        inputName.current.value = inputImgURL.current.value = inputDescription.current.value = null;
    }

    function clearAll() {
        fetch(buddyListURL + "/delete_all", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => {
                setBuddyList([]);
            });
    }

    // card click handler
    function showModal(name, imgURL, description) {
        let newModal = { ...modal };
        newModal.visible = true;
        newModal.name = name;
        newModal.imgURL = imgURL;
        newModal.description = description === "" ? "No Description" : description;
        setModal(newModal);
    }

    function closeModal() {
        let newModal = { ...modal };
        newModal.visible = false;
        setModal(newModal);
    }

    return (
        <div className="card-selection">
            <h1>
                <img
                    src="https://see.fontimg.com/api/renderfont4/MVZ6w/eyJyIjoiZnMiLCJoIjo3OCwidyI6MTAwMCwiZnMiOjc4LCJmZ2MiOiIjRDBBQjIyIiwiYmdjIjoiI0YzMTkxOSIsInQiOjF9/Q2hvb3NlIFlvdXIgU3R1ZHkgQnVkZHk/harry-p.png"
                    alt="Harry Potter fonts"
                ></img>
            </h1>
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
                    <input ref={inputImgURL} type="text" id="card-URL" name="url" />
                    <br />
                    <br />
                </div>
                <div className="card-input-wrapper">
                    <label id="description-label" forhtml="card-URL">
                        Add Buddy Description (Optional):
                    </label>
                    <br />
                    <input ref={inputDescription} type="text" id="card-description" name="description" />
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

                    <button onClick={() => clearInput()} className="btn btn-clear-input" type="button">
                        Clear Input
                    </button>
                    <button onClick={() => clearAll()} className="btn btn-clear-all" type="button">
                        Clear All
                    </button>
                </div>
            </form>

            <BuddyList buddyList={buddyList} showModal={showModal} />
            <Modal modal={modal} closeModal={closeModal} />
        </div>
    );
}

export default StudyGroup;
