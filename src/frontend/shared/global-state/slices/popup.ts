import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TPopupState = Partial<{
  request: {
    form?: boolean;
    success?: boolean;
  };
}>;

const initialState: TPopupState = {
  request: {
    form: false,
    success: false,
  },
};

export const popupSlice = createSlice({
  name: "popupSlice",
  initialState,
  reducers: {
    default: (state) => {
      state.request = initialState.request;
    },
    requestFormRM: (state, action: PayloadAction<typeof state>) => {
      state.request!.form = action.payload.request!.form;
    },
    requestSuccessRM: (state, action: PayloadAction<typeof state>) => {
      state.request!.success = action.payload.request!.success;
    },
  },
});
