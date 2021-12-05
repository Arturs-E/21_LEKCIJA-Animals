import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AnimalsState = {
  id: string;
  name: {
    en: string;
    [prop: string]: string;
  }
  imgSrc: string;
  species: string;
}

const getInitialState = () => {
  const savedTasks = localStorage.getItem('animal-filter');
  if (!savedTasks) {
    return [];
  }
  const initialValue = JSON.parse(savedTasks);
  return initialValue;
};

const initialState: AnimalsState[] = getInitialState();

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AnimalsState>) => ([...state, action.payload]),
    addLanguageProperty: (state, action: PayloadAction<string>) => (
      state.map((item) => ({ ...item, name: { ...item.name, [action.payload]: '' } }))
    ),
    addTranslations: (state, action: PayloadAction<{ [prop: string]: string, en: string }[]>) => (
      state.map((item, index) => ({ ...item, name: action.payload[index] }))
    ),
  },
});

const { addItem, addLanguageProperty, addTranslations } = animalsSlice.actions;
const animalsReducer = animalsSlice.reducer;
const animalsName = animalsSlice.name;

export {
  animalsSlice, animalsReducer, animalsName, addItem, addLanguageProperty, addTranslations,
};
