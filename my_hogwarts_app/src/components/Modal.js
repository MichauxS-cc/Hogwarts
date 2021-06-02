import "../css/Modal.css";

function Modal(props) {
    let visible = "hidden";
    if (props.modal.visible) visible = "visible";

    function handleClick() {
        props.closeModal();
    }

    return (
        <div className={`modal-container ${visible}`}>
            <button onClick={handleClick} className="modal-close">
                +
            </button>
            <div className="modal-card-container">
                <div className="modal-img-wrapper">
                    <img className="modal-img" src={props.modal.imgURL} />
                </div>
                <div className="modal-text-wrapper">
                    <h3 className="modal-name">{props.modal.name}</h3>
                    <p className="modal-description">{props.modal.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
