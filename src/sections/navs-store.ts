import create from "zustand";

export enum NavsPosition {
  top = "top",
  left = "left",
}

const useNavsStore = create(() => {
  return {
    navsPosition: NavsPosition.top,
  };
});

export default useNavsStore;
