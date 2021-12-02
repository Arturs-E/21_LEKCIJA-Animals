import React, { FC } from 'react';
import './Modal.scss';

type ModalProps = {
  closeModal: () => void;
}

const Modal:FC<ModalProps> = ({ closeModal }) => (
  <div className="modal">
    <div className="modal__background">
      <div className="modal__window">
        <form className="modal__form">
          <div className="modal__header">
            <h2>Add animal</h2>
            <button type="button" onClick={closeModal}>Close</button>
          </div>
          <label htmlFor="animal-name">
            Name:
            <input id="animal-name" type="text" placeholder="Animal name" />
          </label>
          <label htmlFor="animal-source">
            Image source:
            <input id="animal-source" type="text" placeholder="Animal image" />
          </label>
          <label htmlFor="animal-species">
            Species (add new species):
            <input id="animal-species" type="text" placeholder="Animal species" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  </div>
);

export default Modal;
