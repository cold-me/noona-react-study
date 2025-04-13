import { create } from 'zustand';
const usePhoneBookStore = create((set) => ({
    phoneBook: [],
    addContact: (name, phoneNumber) =>
        set((state) => ({ phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }] })),
    deleteContact: (id) => set((state) => ({ phoneBook: state.phoneBook.filter((item) => item.id !== id) })),
}));
export default usePhoneBookStore;
