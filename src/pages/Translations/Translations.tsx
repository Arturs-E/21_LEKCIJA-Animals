import React from 'react';
import './Translations.scss';
import { uuid } from 'uuidv4';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Translations = () => {
  const animalData = useAppSelector((state) => state.animals);
  const languages = useAppSelector((state) => state.languages);
  const dispatch = useAppDispatch();

  if (animalData.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>No animals added yet!</h2>;
  }

  return (
    <section>
      <h2 className="translations-page-heading">Animal name translations</h2>
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
          animalData.map(({ id, name, species }) => {
            const animalNames = Object.entries(name);
            const numberOfLanguages = animalNames.length;

            return (
              animalNames.map((item, index) => {
                if (!index) {
                  return (
                    <tr key={uuid()}>
                      <th
                        rowSpan={numberOfLanguages}
                        className="animal-translations__animal-name"
                      >
                        {name.en}
                      </th>
                      <td className="animal-translations__language-code">{item[0]}</td>
                      <td className="animal-translations__animal-name">{item[1]}</td>
                    </tr>
                  );
                }
                return (numberOfLanguages > 1) && (
                <tr key={uuid()}>
                  <td className="animal-translations__language-code">{item[0]}</td>
                  <td className="animal-translations__animal-name">
                    {
                      item[1]
                        ? item[1]
                        : <input type="text" />
                    }
                  </td>
                </tr>
                );
              })
            );
          })
        }
        </tbody>
      </table>
    </section>
  );
};

export default Translations;
