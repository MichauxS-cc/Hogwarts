import "../css/Modal.css";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  switchModalMode,
  updateModal,
  setBuddyList,
} from "../actions";
import axios from "axios";

function Modal() {
  const buddyListURL = "http://localhost:3000/db/buddy";
  const modal = useSelector((state) => state.cardModal);
  const dispatch = useDispatch();

  const editName = useRef();
  const editDescription = useRef();
  let visible = "hidden";
  if (modal.visible) visible = "visible";

  function finishEditing() {
    const updateBuddyInfo = {
      name: editName.current.value,
      description: editDescription.current.value,
    };

    const updateBuddy = async () => {
      const response = await axios
        .patch(buddyListURL + "/update/" + modal._id, updateBuddyInfo)
        .catch((err) => {
          alert("Error *** adding new buddy: " + err.response.data.message);
        });

      if (response?.data) {
        dispatch(setBuddyList(response.data));
        dispatch(switchModalMode());
        dispatch(
          updateModal({
            name: updateBuddyInfo.name,
            description: updateBuddyInfo.description,
          })
        );
      }
    };
    updateBuddy();
  }

  function renderEditableComponent() {
    return (
      <div className={`modal-container ${visible}`}>
        <button onClick={() => dispatch(closeModal())} className="modal-close">
          +
        </button>
        <div className="modal-card-container">
          <div className="modal-img-wrapper">
            <img className="modal-img" src={modal.imgURL} alt={modal.name} />
          </div>
          <div className="modal-text-wrapper">
            <div>
              <input ref={editName} type="text" defaultValue={modal.name} />
              <textarea
                id="input-edit-description"
                ref={editDescription}
                type="text"
                rows="10"
                defaultValue={modal.description}
              />
              <button onClick={finishEditing} className="edit-btn">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderNonEditableComponent() {
    return (
      <div className={`modal-container ${visible}`}>
        <button onClick={() => dispatch(closeModal())} className="modal-close">
          +
        </button>
        <div className="modal-card-container">
          <div className="modal-img-wrapper">
            <img className="modal-img" src={modal.imgURL} alt={modal.name} />
          </div>
          <div className="modal-text-wrapper">
            <h3 className="modal-name">{modal.name}</h3>
            <p className="modal-description">{modal.description}</p>
            <button
              onClick={() => dispatch(switchModalMode())}
              className="edit-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return modal.isEditable
    ? renderEditableComponent()
    : renderNonEditableComponent();
}

export default Modal;
