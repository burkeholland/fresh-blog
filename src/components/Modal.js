const Modal = ({ showModal, message, onYesClick, onDismiss }) => {
  return (
    <div className={`modal ${showModal ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onDismiss}></div>
      <div className="modal-content">
        <div className="box p-3">
          <p className="block is-size-5">{message}</p>
          <div>
            <div className="buttons is-right">
              <button className="button" onClick={onYesClick}>
                Yes
              </button>
              <button className="button is-danger" onClick={onDismiss}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onDismiss}
        className="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  );
};

export default Modal;
