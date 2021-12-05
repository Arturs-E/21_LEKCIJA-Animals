import React, { ChangeEvent, FC, FormEvent } from 'react';
import { uuid } from 'uuidv4';
import Button from '../../components/Buttons/Button';

type TranslationsFormProps = {
  translations: {id: string, names: {[p: string]: string, en: string}}[];
  setTranslations: (value: {id: string, names: {[p: string]: string, en: string}}[]) => void;
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
}

const TranslationsForm:FC<TranslationsFormProps> = ({
  translations,
  setTranslations,
  submitHandler,
}) => (
  <form onSubmit={(e) => submitHandler(e)}>
    <table className="animal-translations">
      <thead>
        <tr>
          <th>Animal</th>
          <th>Language</th>
          <th>Animal Name</th>
        </tr>
      </thead>
      <tbody>
        {
        translations.map(({ id, names }) => {
          const languageKeys = Object.keys(names);
          const numberOfLanguages = languageKeys.length;
          const languageValues = Object.values(names);

          return (
            // <TranslationsContent
            //   id={id}
            //   languageValues={languageValues}
            //   numberOfLanguages={numberOfLanguages}
            //   languageKeys={languageKeys}
            //   translations={translations}
            //   setTranslations={() => setTranslations}
            // />
            languageValues.map((item, index) => {
              if (!index) {
                return (
                  <tr key={uuid()}>
                    <th
                      rowSpan={numberOfLanguages}
                      className="animal-translations__animal-name"
                    >
                      {item}
                    </th>
                    <td className="animal-translations__language-code">{languageKeys[index]}</td>
                    <td className="animal-translations__animal-name">{item}</td>
                  </tr>
                );
              }
              return (numberOfLanguages > 1) && (
                <tr key={uuid()}>
                  <td className="animal-translations__language-code">{languageKeys[index]}</td>
                  <td className="animal-translations__animal-name">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => setTranslations(translations
                        .map((value) => (value.id === id
                          ? ({ ...value, names: { ...value.names, [languageKeys[index]]: e.target.value } })
                          : value)))}
                    />
                  </td>
                </tr>
              );
            })
          );
        })
      }
      </tbody>
    </table>
    <Button title="Submit" />
  </form>
);

export default TranslationsForm;
