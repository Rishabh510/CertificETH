import create from "zustand";

const useStore = create((set) => ({
  account: "",
  contract: "0xAB4919E28E7e6bA06D15A3D90c32D798887B469A",

  addAccount: (newAccount) =>
    set((state) => ({
      account: newAccount,
    })),
  removeAccount: () =>
    set((state) => ({
      account: "",
    })),
}));

export default useStore;
