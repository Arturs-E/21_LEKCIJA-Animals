import React, {
  FC, useRef, MouseEvent, useState, FormEvent, useEffect,
} from 'react';
import { uuid } from 'uuidv4';
import './Modal.scss';
import './FormModal.scss';
import { GrClose } from 'react-icons/gr';
import Button from '../Buttons/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItem } from '../../redux/animalsSlice';

type AnimalFormModalProps = {
  closeModal: () => void;
  uniqueAnimalSpecies: string[];
}

const AnimalFormModal:FC<AnimalFormModalProps> = ({ closeModal, uniqueAnimalSpecies }) => {
  const [nameInput, setNameInput] = useState('');
  const [imgSrcInput, setImgSrcInput] = useState('');
  const [speciesInput, setSpeciesInput] = useState('');

  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const availableLanguages = useAppSelector((state) => state.languages.languages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const animalNamesForAllLanguages = availableLanguages
    .reduce((prev, curr) => ({ ...prev, [curr]: '' }), {});

  const closeModalWithClickOutside = (e: MouseEvent) => {
    if (modalRef.current!.contains(e.target as HTMLElement)) {
      return;
    }
    closeModal();
  };

  const [showSpeciesSelectInput, setShowSpeciesSelectInput] = useState(() => uniqueAnimalSpecies.length > 0);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const speciesValue = speciesInput ? speciesInput.toLowerCase() : selectRef.current!.value;

    dispatch(addItem(
      {
        id: uuid(),
        name: { ...animalNamesForAllLanguages, en: nameInput.toLowerCase() },
        imgSrc: imgSrcInput,
        species: speciesValue,
      },
    ));
    closeModal();
  };

  return (
    <div className="modal">
      <div
        className="modal__background"
        onClick={(e) => closeModalWithClickOutside(e)}
      >
        <div ref={modalRef} className="modal__window">
          <div className="modal__contents">
            <form className="form" onSubmit={(e) => submitHandler(e)}>
              <div className="form__header">
                <h2>Add animal</h2>
                <Button title={<GrClose />} clickHandler={closeModal} additionalClasses="button--icon" />
              </div>
              <div className="form__content">
                <label htmlFor="animal-name" className="form__form-field">
                  <strong>Name:</strong>
                  <input
                    id="animal-name"
                    type="text"
                    className="form__text-input"
                    placeholder="Animal name"
                    ref={firstInputRef}
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                  />
                </label>
                <label htmlFor="animal-source" className="form__form-field">
                  <strong>Image source:</strong>
                  <input
                    id="animal-source"
                    type="text"
                    className="form__text-input"
                    placeholder="Animal image"
                    value={imgSrcInput}
                    onChange={(e) => setImgSrcInput(e.target.value)}
                  />
                </label>
                {
                  showSpeciesSelectInput
                    ? (
                      <label
                        htmlFor="animal-species"
                        className="form__form-field"
                        style={{ gridTemplateColumns: '1fr auto' }}
                      >
                        <strong style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>Species:</strong>
                        <select
                          id="animal-species"
                          ref={selectRef}
                          className="form__text-input"
                          placeholder="Animal species"
                          value={speciesInput}
                          onChange={(e) => setSpeciesInput(e.target.value)}
                        >
                          {
                            uniqueAnimalSpecies.map((item) => (
                              <option key={item}>{item}</option>
                            ))
                          }
                        </select>
                        <Button title="Add new" clickHandler={() => setShowSpeciesSelectInput(false)} />
                      </label>
                    )
                    : (
                      <label htmlFor="animal-species-input" className="form__form-field">
                        <strong>Species:</strong>
                        <input
                          id="animal-species-input"
                          type="text"
                          className="form__text-input"
                          placeholder="Animal species"
                          onChange={(e) => setSpeciesInput(e.target.value)}
                        />
                      </label>
                    )
                }
              </div>
              <div className="form__footer">
                <Button
                  title="Cancel"
                  type="button"
                  additionalClasses="button--secondary"
                  clickHandler={() => closeModal()}
                />
                <Button title="Save" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalFormModal;
