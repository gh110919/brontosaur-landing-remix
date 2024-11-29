import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TLinksState = Partial<{
  header: {
    service: boolean;
  };
  prologue: {
    service: boolean;
  };
  request: {
    form: boolean;
  };
  footer: {
    vk: boolean;
    tg: boolean;
    service: boolean;
  };
}>;

const initialState: TLinksState = {
  header: {
    service: false,
  },
  prologue: {
    service: false,
  },
  request: {
    form: false,
  },
  footer: {
    vk: false,
    tg: false,
    service: false,
  },
};

export const linksSlice = createSlice({
  name: "linksSlice",
  initialState,
  reducers: {
    headerServiceRM: (state, action: PayloadAction<typeof state>) => {
      state.header!.service = action.payload.header!.service;
    },
    prologueSeviceRM: (state, action: PayloadAction<typeof state>) => {
      state.prologue!.service = action.payload.prologue!.service;
    },
    requestFormRM: (state, action: PayloadAction<typeof state>) => {
      state.request!.form = action.payload.request!.form;
    },
    footerVkRM: (state, action: PayloadAction<typeof state>) => {
      state.footer!.vk = action.payload.footer!.vk;
    },
    footerTgRM: (state, action: PayloadAction<typeof state>) => {
      state.footer!.tg = action.payload.footer!.tg;
    },
    footerServiceRM: (state, action: PayloadAction<typeof state>) => {
      state.footer!.service = action.payload.footer!.service;
    },
  },
});
