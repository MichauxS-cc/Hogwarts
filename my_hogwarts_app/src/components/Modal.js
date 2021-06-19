import "../css/Modal.css";
import React, { useRef } from "react";

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
    props.updateModal(
      editName.current.value,
      editDescription.current.value,
      props.modal.id
    );
  }

  function renderEditableComponent() {
    return (
      <div className={`modal-container ${visible}`}>
        <button onClick={handleClick} className="modal-close">
          +
        </button>
        <div className="modal-card-container">
          <div className="modal-img-wrapper">
            <img
              className="modal-img"
              src={props.modal.imgURL}
              alt={props.modal.name}
            />
          </div>
          <div className="modal-text-wrapper">
            <div>
              <input
                ref={editName}
                type="text"
                defaultValue={props.modal.name}
              />
              <textarea
                id="input-edit-description"
                ref={editDescription}
                type="text"
                rows="10"
                defaultValue={props.modal.description}
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
        <button onClick={handleClick} className="modal-close">
          +
        </button>
        <div className="modal-card-container">
          <div className="modal-img-wrapper">
            <img
              className="modal-img"
              src={props.modal.imgURL}
              alt={props.modal.name}
            />
          </div>
          <div className="modal-text-wrapper">
            <h3 className="modal-name">{props.modal.name}</h3>
            <p className="modal-description">{props.modal.description}</p>
            <button onClick={changeEditMode} className="edit-btn">
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return props.modal.isEditable
    ? renderEditableComponent()
    : renderNonEditableComponent();
}

export default Modal;
