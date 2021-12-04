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
      <table>
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
                      <th rowSpan={numberOfLanguages}>{name.en}</th>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  );
                }
                return (numberOfLanguages > 1) && (
                <tr key={uuid()}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
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
