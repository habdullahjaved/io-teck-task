// lib/storage.ts
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

type Storage = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void | string>;
  removeItem: (key: string) => Promise<void>;
};

const createNoopStorage = (): Storage => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const isClient = typeof window !== "undefined";

const storage: Storage = isClient
  ? createWebStorage("local")
  : createNoopStorage();

export const sessionStorage: Storage = isClient
  ? createWebStorage("session")
  : createNoopStorage();

export default storage;
