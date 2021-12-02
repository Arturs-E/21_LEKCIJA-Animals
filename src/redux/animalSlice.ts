import { createSlice } from '@reduxjs/toolkit';

type AnimalState = {
  name: {
    en: string;
    [prop: string]: string;
  }
  imgSrc: string;
  species: string;
}

const initialState: AnimalState[] = [];

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {},
});

const animalReducer = animalSlice.reducer;
