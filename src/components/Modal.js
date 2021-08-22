import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal({ children, onClose, onDelete }) {
    return (
        <React.Fragment>
            <div className="modal-body">
                <FontAwesomeIcon icon={faTimes} onClick={onClose} />
                {children}
                <div className="button">
                    <button>Assign Category</button>
                    <button onClick={onDelete}>Delete Table</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Modal;