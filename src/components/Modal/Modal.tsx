import React, {
  FC, FormEvent, useRef, useState, MouseEvent,
} from 'react';
import './Modal.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItem } from '../../redux/animalsSlice';

type ModalProps = {
  closeModal: () => void;
}

const Modal:FC<ModalProps> = ({ closeModal }) => {
  const [nameInput, setNameInput] = useState('');
  const [imgSrcInput, setImgSrcInput] = useState('');
  const [speciesInput, setSpeciesInput] = useState('');
  const backgroundRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const animalData = useAppSelector((state) => state.animals);
  const dispatch = useAppDispatch();

  const uniqueAnimalSpecies = animalData
    .map((item) => item.species)
    .filter((item, index, arr) => index === arr.indexOf(item));

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addItem({ name: { en: nameInput }, imgSrc: imgSrcInput, species: speciesInput }));
    closeModal();
  };

  const closeModalWithClickOutside = (e: MouseEvent) => {
    if (modalRef.current!.contains(e.target as HTMLElement)) {
      return;
    }
    closeModal();
  };

  return (
    <div className="modal">
      <div
        ref={backgroundRef}
        className="modal__background"
        onClick={(e) => closeModalWithClickOutside(e)}
      >
        <div ref={modalRef} className="modal__window">
          <form className="modal__form" onSubmit={(e) => submitHandler(e)}>
            <div className="modal__header">
              <h2>Add animal</h2>
              <button type="button" onClick={closeModal}>Close</button>
            </div>
            <label htmlFor="animal-name">
              Name:
              <input
                id="animal-name"
                type="text"
                value={nameInput}
                placeholder="Animal name"
                onChange={(e) => setNameInput(e.target.value)}
              />
            </label>
            <label htmlFor="animal-source">
              Image source:
              <input
                id="animal-source"
                type="text"
                value={imgSrcInput}
                placeholder="Animal image"
                onChange={(e) => setImgSrcInput(e.target.value)}
              />
            </label>
            <label htmlFor="animal-species">
              Species (add new species):
              <select
                id="animal-species"
                value={speciesInput}
                placeholder="Animal species"
                onChange={(e) => setSpeciesInput(e.target.value)}
              >
                {
                  uniqueAnimalSpecies.map((item) => (
                    <option key={item}>{item}</option>
                  ))
                }
              </select>
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
