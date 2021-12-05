import React, { FC, FocusEvent, useState } from 'react';

type TranslationsInputProps = {
  value: string;
  changeHandler: (value: string) => void;
}

const TranslationsInput:FC<TranslationsInputProps> = ({ value, changeHandler }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      onBlur={(e) => changeHandler(inputValue)}
    />
  );
};

export default TranslationsInput;
