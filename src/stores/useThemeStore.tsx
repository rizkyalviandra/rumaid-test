import create from "zustand";
import * as eva from "@eva-design/eva";

const useThemeStore = create((set: any) => ({
  theme: eva.light,
  setTheme: (theme: any) => set({ theme }),
}));

export default useThemeStore;
