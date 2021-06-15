import "../css/Modal.css";
import React, { useState, useRef, useEffect } from "react";

function Modal(props) {
  const editName = useRef();
  const editDescription = useRef();
  let visible = "hidden";
  if (props.modal.visible) visible = "visible";

  function changeEditMode() {
    props.switchMode(props.modal);
  }

  function handleClick() {
    props.closeModal();
  }

  function finishEditing() {
    console.log(editName + " in finishEditing " + editDescription);
    props.updateModal(editName.current.value, editDescription.current.value);
  }

  return props.modal.isEditable ? (
    <div className={`modal-container ${visible}`}>
      <button onClick={handleClick} className="modal-close">
        +
      </button>
      <div className="modal-card-container">
        <div className="modal-img-wrapper">
          <img className="modal-img" src={props.modal.imgURL} />
        </div>
        <div className="modal-text-wrapper">
          <div>
            <input ref={editName} type="text" defaultValue={props.modal.name} />
            <input
              ref={editDescription}
              type="text"
              defaultValue={props.modal.description}
            />
            <button onClick={finishEditing} className="edit-btn">
              {" "}
              Done{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={`modal-container ${visible}`}>
      <button onClick={handleClick} className="modal-close">
        +
      </button>
      <div className="modal-card-container">
        <div className="modal-img-wrapper">
          <img className="modal-img" src={props.modal.imgURL} />
        </div>
        <div className="modal-text-wrapper">
          <div onDoubleClick={changeEditMode}>
            <h3 className="modal-name">{props.modal.name}</h3>
            <p className="modal-description">{props.modal.description}</p>
          </div>
          {/*<h3 className="modal-name">{props.modal.name}</h3>
          <p className="modal-description">{props.modal.description}</p>*/}
          {/*<button onclick={handleEdit} className="edit-btn">
            {" "}
            Edit{" "}
  </button>*/}
        </div>
      </div>
    </div>
  );
}

export default Modal;
