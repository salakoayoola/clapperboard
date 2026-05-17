import { create } from 'zustand';

interface SlateState {
  production: string;
  director: string;
  dop: string;
  scene: string;
  take: number;
  fps: number;
  setField: (field: keyof Omit<SlateState, 'setField' | 'incrementTake'>, value: any) => void;
  incrementTake: () => void;
}

export const useSlateStore = create<SlateState>((set) => ({
  production: 'MY FILM',
  director: 'A. Nolan',
  dop: 'J. Doe',
  scene: '12A',
  take: 1,
  fps: 24,
  setField: (field, value) => set({ [field]: value }),
  incrementTake: () => set((state) => ({ take: state.take + 1 })),
}));
