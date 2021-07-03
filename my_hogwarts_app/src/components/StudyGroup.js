import React, { useState, useRef, useEffect } from "react";
import "../css/StudyGroup.css";
import BuddyList from "./BuddyList.js";
import Modal from "./Modal.js";

import axios from "axios";

function StudyGroup() {
  const [buddyList, setBuddyList] = useState([]);
  const inputName = useRef(); //to get user input
  const inputImgURL = useRef();
  const inputDescription = useRef();
  const buddyListURL = "http://localhost:3000/db/buddy";

  const [modal, setModal] = useState({
    visible: false,
    isEditable: false,
    name: "",
    imgURL: "",
    description: "",
    _id: "",
  });

  useEffect(() => {
    // console.log("[ modal ]", modal);
  }, [modal]);

  const getBuddylistData = async () => {
    const response = await axios.get(buddyListURL);

    if (response?.data) setBuddyList(response.data);
  };
  useEffect(() => {
    getBuddylistData();
  }, []);

  // add card to buddyList by creating a new array with the new user input
  // input: name, imgURL
  function addCard() {
    let name = inputName.current.value;
    let imgURL = inputImgURL.current.value;
    let description = inputDescription.current.value;

    if (name === "" || imgURL === "")
      return alert(
        "Error *** adding new buddy: user name and img url can't be empty"
      );

    const newBuddy = {
      name: name,
      imgURL: imgURL,
      description: description,
    };

    const addNewBuddy = async () => {
      const response = await axios.post(buddyListURL + "/add", newBuddy);

      //optional chaining to check if response and response data both exist
      if (response?.data) setBuddyList(response.data);
    };

    addNewBuddy();
    clearInput();
  }

  function removeCard() {
    const removeName = inputName.current.value;
    console.log(
      "User wants to delete: " +
        (removeName === "" ? "empty String" : removeName)
    );

    if (removeName === "") {
      return alert(
        "Error *** remove a buddy: Please enter a buddy name to remove"
      );
    }
    const findTheBuddyToRemove = buddyList.find(
      (buddy) => buddy.name === removeName
    );
    if (!findTheBuddyToRemove) {
      return alert(removeName + " is not in your list.");
    }

    const removeBuddy = async () => {
      const response = await axios.delete(buddyListURL + "/delete/", {
        params: { name: removeName },
      });

      if (response && response.data) setBuddyList(response.data);
    };
    removeBuddy();

    clearInput();
  }

  function clearInput() {
    inputName.current.value =
      inputImgURL.current.value =
      inputDescription.current.value =
        null;
  }

  function clearAll() {
    const deleteAll = async () => {
      const response = await axios
        .delete(buddyListURL + "/delete_all")
        .catch((err) => {
          console.error(err);
        });

      if (response && response.data) setBuddyList(response.data);
    };

    deleteAll();
    clearInput();
  }

  // card click handler
  function showModal(id) {
    const temp = buddyList.find((buddy) => buddy._id === id);

    temp.visible = true;
    temp.isEditable = false;

    setModal(temp);
  }

  function refreshModal(list) {
    const id = modal._id;

    const temp = list.find((buddy) => buddy._id === id);
    const temp2 = { ...temp };
    temp2.visible = true;
    temp2.isEditable = false;
    setModal(temp2);
  }

  function closeModal() {
    let newModal = { ...modal };
    newModal.visible = false;
    setModal(newModal);
  }

  function switchMode() {
    let newModal = { ...modal };
    newModal.isEditable = !modal.isEditable;
    setModal(newModal);
  }

  function updateModal(newName, newDescription, targetId) {
    console.log(
      "%c [ targetId ]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      targetId
    );
    const updateBuddyInfo = {
      name: newName,
      description: newDescription,
    };

    const updateBuddy = async () => {
      const response = await axios
        .patch(buddyListURL + "/update/" + targetId, updateBuddyInfo)
        .catch((err) => {
          alert("Error *** adding new buddy: " + err.response.data.message);
        });

      if (response && response.data) {
        console.log(
          "%c [ response.data ]",
          "font-size:13px; background:pink; color:#bf2c9f;",
          response.data
        );

        setBuddyList(response.data);
        refreshModal(response.data);
      }
    };

    updateBuddy();
    clearInput();
    switchMode();
  }

  return (
    <div className="card-selection">
      <h1>
        <img
          className="header-img"
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
          <input
            ref={inputDescription}
            type="text"
            id="card-description"
            name="description"
          />
          <br />
          <br />
        </div>
        <div className="flex right">
          <button
            onClick={() => addCard()}
            className="btn btn-add"
            type="button"
          >
            Add
          </button>
          <button
            onClick={() => removeCard()}
            className="btn btn-remove"
            type="button"
          >
            Remove
          </button>

          <button
            onClick={() => clearInput()}
            className="btn btn-clear-input"
            type="button"
          >
            Clear Input
          </button>
          <button
            onClick={() => clearAll()}
            className="btn btn-clear-all"
            type="button"
          >
            Clear All
          </button>
        </div>
      </form>

      <BuddyList buddyList={buddyList} showModal={showModal} />
      <Modal
        modal={modal}
        closeModal={closeModal}
        switchMode={switchMode}
        updateModal={updateModal}
      />
    </div>
  );
}

export default StudyGroup;
