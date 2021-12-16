import create from "zustand";

const useFilterStore = create((set: any) => ({
  filter: "",
  setFilter: (filter: any) => set({ filter }),
}));

export default useFilterStore;
