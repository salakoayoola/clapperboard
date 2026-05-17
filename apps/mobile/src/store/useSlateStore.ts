import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

interface SlateState {
  production: string;
  director: string;
  dop: string;
  scene: string;
  take: number;
  fps: number;
  isSoundEnabled: boolean;
  setField: (field: keyof Omit<SlateState, 'setField' | 'incrementTake' | 'toggleSound'>, value: any) => void;
  incrementTake: () => void;
  toggleSound: () => void;
}

export const useSlateStore = create<SlateState>()(
  persist(
    (set) => ({
      production: 'MY FILM',
      director: 'A. Nolan',
      dop: 'J. Doe',
      scene: '12A',
      take: 1,
      fps: 24,
      isSoundEnabled: true,
      setField: (field, value) => set({ [field]: value }),
      incrementTake: () => set((state) => ({ take: state.take + 1 })),
      toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
    }),
    {
      name: 'slate-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
