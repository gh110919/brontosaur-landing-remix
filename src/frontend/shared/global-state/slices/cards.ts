import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TCardsState = Partial<{
  selected: {
    essense?: number;
    available?: number;
    what?: number;
    booking?: number;
    menu?: number;
  };
  hover: {
    advantages: boolean;
  };
}>;

const initialState: TCardsState = {
  selected: {
    essense: undefined,
    available: undefined,
    what: undefined,
    booking: undefined,
    menu: undefined,
  },
  hover: {
    advantages: false,
  },
};

export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    selectedEssenseRM: (state, action: PayloadAction<typeof state>) => {
      state.selected!.essense = action.payload.selected!.essense;
    },
    selectedAvailableRM: (state, action: PayloadAction<typeof state>) => {
      state.selected!.available = action.payload.selected!.available;
    },
    selectedWhatRM: (state, action: PayloadAction<typeof state>) => {
      state.selected!.what = action.payload.selected!.what;
    },
    selectedBookingRM: (state, action: PayloadAction<typeof state>) => {
      state.selected!.booking = action.payload.selected!.booking;
    },
    selectedMenuRM: (state, action: PayloadAction<typeof state>) => {
      state.selected!.menu = action.payload.selected!.menu;
    },
    hoverAdvantagesRM: (state, action: PayloadAction<typeof state>) => {
      state.hover!.advantages = action.payload.hover!.advantages;
    },
  },
});
