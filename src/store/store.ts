// @ts-ignore
import GlobalHook, { Store } from "use-global-hook";

export interface LoginItem {
  type?: string;
  details: {
    name: string;
    login: string;
    password: string;
    website: string;
  };
}

type VaultItems = Record<string, LoginItem>;

export type State = {
  curItemId: string;
  isEditingItem: boolean;
  isAddingItem: boolean;
  vault: VaultItems;
};

export type Actions = {
  setCurItemId(itemId: string): void;
  addItem(newItem: LoginItem): void;
  editItemById(newItem: LoginItem, itemId: string): void;
  removeItem(itemId: string): void;
  setIsEditingItem(isEditing: boolean): void;
  setIsAddingItem(isAdding: boolean): void;
};

const initialState: State = {
  curItemId: "0",
  isEditingItem: false,
  isAddingItem: false,
  vault: {
    "0": {
      details: {
        name: "",
        login: "",
        password: "",
        website: "",
      },
    },
    "1": {
      details: {
        name: "Google",
        login: "OHO123",
        password: "password",
        website: "google.com",
      },
    },
    "2": {
      details: {
        name: "YouTube",
        login: "OHO123",
        password: "very very strong password",
        website: "youtube.com",
      },
    },
    "3": {
      type: "login",
      details: {
        name: "hh.ru",
        login: "OHO123",
        password: "very very strong password",
        website: "linkedin.com",
      },
    },
  },
};

const setCurItemId = (store: Store<State, Actions>, itemId: string): void => {
  const nextCurItemId = itemId;
  store.setState({ curItemId: nextCurItemId });
};

const addItem = (store: Store<State, Actions>, newItem: LoginItem): void => {
  const { vault }: State = store.state;

  const keys: string[] = Object.keys(vault);
  const lastId: number = Number(keys[keys.length - 1]);

  const nextItems = {
    ...vault,
    [lastId + 1]: { ...newItem },
  };
  store.setState({ vault: nextItems });
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
  const nextIsEditing = isEditing;
  store.setState({ isEditingItem: nextIsEditing });
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

const useGlobal = GlobalHook(initialState, actions);

export default useGlobal;
