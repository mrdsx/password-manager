// @ts-ignore
import GlobalHook, { Store } from "use-global-hook";

export interface LoginItemDetails {
  name: string;
  login: string;
  password: string;
  website: string;
}

export interface LoginItem {
  favorite: boolean;
  inTrash: boolean;
  createdAt: Date;
  updatedAt: Date;
  folder: string;
  details: LoginItemDetails;
}

export type Vault = Record<string, LoginItem>;

export interface State {
  curItemId: string;
  isEditingItem: boolean;
  isAddingItem: boolean;
  vault: Vault;
}

export interface Actions {
  setCurItemId(itemId: string): void;
  addItem(newItem: LoginItem): void;
  editItemById(newItem: LoginItem, itemId: string): void;
  removeItem(itemId: string): void;
  setIsEditingItem(isEditing: boolean): void;
  setIsAddingItem(isAdding: boolean): void;
}

const initialState: State = {
  curItemId: "0",
  isEditingItem: false,
  isAddingItem: false,
  vault: {
    "0": {
      favorite: false,
      inTrash: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      folder: "No folder",
      details: {
        name: "",
        login: "",
        password: "",
        website: "",
      },
    },
    "1": {
      favorite: false,
      inTrash: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      folder: "No folder",
      details: {
        name: "Google",
        login: "OHO123",
        password: "strong",
        website: "google.com",
      },
    },
    "2": {
      favorite: false,
      inTrash: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      folder: "No folder",
      details: {
        name: "YouTube",
        login: "oho123",
        password: "very very strong",
        website: "youtube.com",
      },
    },
  },
};

const setCurItemId = (store: Store<State, Actions>, itemId: string): void => {
  const nextValue = itemId;
  store.setState({ curItemId: nextValue });
};

const addItem = (store: Store<State, Actions>, newItem: LoginItem): void => {
  const { vault }: State = store.state;

  const keys: string[] = Object.keys(vault);
  const lastId: number = Number(keys[keys.length - 1]);

  const nextVault = {
    ...vault,
    [lastId + 1]: { ...newItem },
  };
  store.setState({ vault: nextVault });
};

const editItemById = (
  store: Store<State, Actions>,
  newItem: LoginItem,
  itemId: string
): void => {
  const { vault }: State = store.state;

  const nextItems = {
    ...vault,
    [itemId]: { ...newItem },
  };
  store.setState({ vault: nextItems });
};

const removeItem = (store: Store<State, Actions>, itemId: string): void => {
  const { vault }: State = store.state;

  delete vault[itemId];
  store.setState({ curItemId: "0" });
};

const setIsEditingItem = (
  store: Store<State, Actions>,
  isEditing: boolean
): void => {
  const nextValue = isEditing;
  store.setState({ isEditingItem: nextValue });
};

const setIsAddingItem = (
  store: Store<State, Actions>,
  isAdding: boolean
): void => {
  const nextValue = isAdding;
  store.setState({ isEditingItem: nextValue, isAddingItem: nextValue });
};

const actions = {
  setCurItemId,
  addItem,
  editItemById,
  removeItem,
  setIsEditingItem,
  setIsAddingItem,
};

const useGlobalStore = GlobalHook(initialState, actions);

export default useGlobalStore;
