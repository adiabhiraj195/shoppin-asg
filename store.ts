import { create } from "zustand";

interface Store {
  value: File | null;
  setValue: (value: File) => void;
  image: string | null;
  setImage: (value: string) => void;
}

export const useStore = create<Store>((set) => ({
  value: null,
  setValue: (newValue) => set({ value: newValue }),
  image: null,
  setImage: (value) => set({ image: value }),
}));
