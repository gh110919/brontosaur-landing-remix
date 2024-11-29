import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TInputsState = Partial<{
  establishment: string;
  fio: string;
  tel: string;
  email: string;
}>;

const initialState: TInputsState = {
  establishment: "",
  fio: "",
  tel: "",
  email: "",
};

export const inputsSlice = createSlice({
  name: "inputsSlice",
  initialState,
  reducers: {
    inputsRM: (state, action: PayloadAction<typeof state>) => {
      state.establishment = action.payload.establishment;
      state.fio = action.payload.fio;
      state.tel = action.payload.tel;
      state.email = action.payload.email;
    },
  },
});
