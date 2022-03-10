import {
  createSlice,
} from '@reduxjs/toolkit';
import { ColorListSlice, ColorListDefaults, ColorListEntity } from '../types/colorList';

/* This is a way to define a default value for a slice. */
const initialState: ColorListSlice = {
  value: ColorListDefaults
};

interface SetAction {
  payload: {
    id: number,
    value: ColorListEntity
  };
}

interface AddAction {
  payload: ColorListEntity;
}

/* A function that returns a slice. */
const colorListSlice = createSlice({
  name: 'colorListStore',
  initialState,
  reducers: {
    resetColorList(state:ColorListSlice): void {
      state.value = initialState.value;
    },
    setColor(state:ColorListSlice, action:SetAction): void {
      state.value[action.payload.id] = action.payload.value;
    },
    addColor(state:ColorListSlice, action:AddAction): void {
      state.value.push(action.payload);
    }
  },
});

export const {
  resetColorList,
  setColor,
  addColor,
} = colorListSlice.actions;
export default colorListSlice.reducer;
