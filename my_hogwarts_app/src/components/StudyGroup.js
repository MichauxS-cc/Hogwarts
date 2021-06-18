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
  const buddyListURL = "http://localhost:3000/db";

  const [modal, setModal] = useState({
    visible: false,
    isEditable: false,
    name: "",
    imgURL: "",
    description: "",
    id: "",
  });

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await fetch(buddyListURL);
  //       const buddyListData = await response.json();
  //       setBuddyList(buddyListData);
  //     }
  //     fetchData();
  //   }, []);

  const getBuddylistData = async () => {
    const response = await axios
      .get(buddyListURL)
      .catch((err) => console.log("Error *** first load: ", err));

    if (response && response.data) setBuddyList(response.data);
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

    // if (name === "" || imgURL === "") return;
    // const newBuddy = {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: name,
    //     imgURL: imgURL,
    //     description: description,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // fetch(buddyListURL + "/add", newBuddy)
    //   .then((res) => res.json())
    //   .then((buddyListData) => setBuddyList(buddyListData));

    const newBuddy = {
      name: name,
      imgURL: imgURL,
      description: description,
    };

    const addNewBuddy = async () => {
      const response = await axios
        .post(buddyListURL + "/add", newBuddy)
        .catch((err) => {
          alert("Error *** adding new buddy: " + err.response.data.message);
        });

      if (response && response.data) setBuddyList(response.data);
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
    // fetch(buddyListURL + "/delete", {
    //   method: "DELETE",
    //   body: JSON.stringify({ removeName }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((buddyListData) => setBuddyList(buddyListData));

    // const removeBuddy = async () => {
    //   const response = await axios
    //     .delete(buddyListURL + "/delete/" + removeName)
    //     .catch((err) => {
    //       alert("Error *** remove a buddy: " + err.response.data.message);
    //     });

    //   if (response && response.data) setBuddyList(response.data);
    // };
    // removeBuddy();

    const removeBuddy = async () => {
      const response = await axios
        .delete(buddyListURL + "/delete/", { params: { name: removeName } })
        .catch((err) => {
          alert("Error *** remove a buddy: " + err.response.data.message);
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
    // fetch(buddyListURL + "/delete_all", {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     setBuddyList([]);
    //   });
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
  function showModal(name, imgURL, description, id) {
    let newModal = { ...modal };
    newModal.visible = true;
    newModal.isEditable = false;
    newModal.name = name;
    newModal.imgURL = imgURL;
    newModal.description = description === "" ? "No Description" : description;
    newModal.id = id;

    setModal(newModal);
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
    // fetch(buddyListURL + "/update/" + targetId, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     name: newName,
    //     description: newDescription,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((buddyListData) => {
    //     setBuddyList(buddyListData);
    //     closeModal();
    //   });

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

      if (response && response.data) setBuddyList(response.data);
    };

    updateBuddy();
    clearInput();
    closeModal();
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
