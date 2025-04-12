import { create } from 'zustand';

const counterStore = create((set) => ({
    count: 0,
    history: [],
    increase: () => set((state) => ({ count: state.count + 1, history: [...state.history, '+1'] })),
    decrease: () => set((state) => ({ count: state.count - 1, history: [...state.history, '-1'] })),
    increaseBy: (value) => set((state) => ({ count: state.count + value, history: [...state.history, '+' + value] })),
}));

export default counterStore;
