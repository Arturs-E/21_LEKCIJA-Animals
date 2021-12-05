import React, { FC } from 'react';
import { uuid } from 'uuidv4';
import translations from './Translations';

type TranslationsContentProps = {
  id: string;
  languageValues: string[];
  numberOfLanguages: number;
  languageKeys: string[];
  setTranslations: (value: ({id: string, names: { [p: string]: string, en: string } })) => void;
}

const TranslationsContent:FC<TranslationsContentProps> = ({
  id,
  languageValues,
  numberOfLanguages,
  languageKeys,
  setTranslations,
}) => (
  <div>Tests</div>
  // languageValues.map((item, index) => {
  //   if (!index) {
  //     return (
  //       <tr key={uuid()}>
  //         <th
  //           rowSpan={numberOfLanguages}
  //           className="animal-translations__animal-name"
  //         >
  //           {item}
  //         </th>
  //         <td className="animal-translations__language-code">{languageKeys[index]}</td>
  //         <td className="animal-translations__animal-name">{item}</td>
  //       </tr>
  //     );
  //   }
  //   return (numberOfLanguages > 1) && (
  //   <tr key={uuid()}>
  //     <td className="animal-translations__language-code">{languageKeys[index]}</td>
  //     <td className="animal-translations__animal-name">
  //       {/* <input */}
  //       {/*  type="text" */}
  //       {/*  value={item} */}
  //       {/*  onChange={(e) => setTranslations(translations */}
  //       {/*    .map((value) => (value.id === id */}
  //       {/*      ? ({ ...value, names: { ...value.names, [languageKeys[index]]: e.target.value } }) */}
  //       {/*      : value)))} */}
  //       {/* /> */}
  //     </td>
  //   </tr>
  //   );
  // })
);

export default TranslationsContent;
