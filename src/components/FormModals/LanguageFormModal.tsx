import React, {
  FC, FormEvent, MouseEvent, useEffect, useRef, useState,
} from 'react';
import './LanguageFromModal.scss';
import Button from '../Buttons/Button';
import { useAppDispatch } from '../../redux/hooks';
import { addLanguage } from '../../redux/languageSlice';
import { addLanguageProperty } from '../../redux/animalsSlice';

type LanguageFormModalProps = {
  closeModal: () => void;
}

const LanguageFormModal:FC<LanguageFormModalProps> = ({ closeModal }) => {
  const [languageCodeInput, setLanguageCodeInput] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const closeModalWithClickOutside = (e: MouseEvent) => {
    if (modalRef.current!.contains(e.target as HTMLElement)) {
      return;
    }
    closeModal();
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addLanguage(languageCodeInput.toLowerCase()));
    dispatch(addLanguageProperty(languageCodeInput.toLowerCase()));
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
                <h2>Add new language</h2>
                <Button title="X" clickHandler={closeModal} />
              </div>
              <div className="form__content">
                <label htmlFor="language-code" className="form__form-field">
                  <strong>Language code (2 letters):</strong>
                  <input
                    id="language-code"
                    type="text"
                    className="form__text-input"
                    placeholder={'Language code, e.g. "EN"'}
                    value={languageCodeInput}
                    onChange={(e) => setLanguageCodeInput(e.target.value)}
                  />
                </label>
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

export default LanguageFormModal;
