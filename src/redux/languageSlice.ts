import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LanguageState = {
  locale: string;
  languages: string[]
}

const getInitialState = () => {
  const savedLanguages = localStorage.getItem('animal-filter-languages');
  if (!savedLanguages) {
    return ({ locale: 'en', languages: ['en'] });
  }
  const initialValue = JSON.parse(savedLanguages);
  return initialValue;
};

const initialState: LanguageState = getInitialState();

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    addLanguage: (state, action: PayloadAction<string>) => (
      { ...state, languages: [...state.languages, action.payload] }
    ),
    setLocale: (state, action: PayloadAction<string>) => (
      { ...state, locale: action.payload }
    ),
  },
});

const { addLanguage, setLocale } = languagesSlice.actions;
const languagesReducer = languagesSlice.reducer;
const languagesName = languagesSlice.name;

export {
  languagesSlice, languagesReducer, languagesName, addLanguage, setLocale,
};
