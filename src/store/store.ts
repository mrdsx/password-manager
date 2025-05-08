// @ts-ignore
import GlobalHook, { Store } from "use-global-hook";

type itemType = "login" | "card" | "id" | "secure note";

export interface LoginItem {
  type: itemType;
  favorite: boolean;
  inTrash: boolean;
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
  moveItemToTrash(itemId: string): void;
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
      type: "login",
      favorite: false,
      inTrash: false,
      details: {
        name: "",
        login: "",
        password: "",
        website: "",
      },
    },
    "1": {
      type: "login",
      favorite: false,
      inTrash: false,
      details: {
        name: "Google",
        login: "OHO123",
        password: "password",
        website: "google.com",
      },
    },
    "2": {
      type: "login",
      favorite: true,
      inTrash: false,
      details: {
        name: "YouTube",
        login: "OHO123",
        password: "very very strong password",
        website: "youtube.com",
      },
    },
    "3": {
      type: "secure note",
      favorite: true,
      inTrash: true,
      details: {
        name: "hh.ru",
        login: "OHO123",
        password: "very very strong password",
        website: "hh.ru",
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

const moveItemToTrash = (
  store: Store<State, Actions>,
  itemId: string
): void => {
  const { vault }: State = store.state;

  const nextVault = {
    ...vault,
    [itemId]: {
      ...vault[itemId],
      inTrash: true,
    },
  };

  store.setState({ curItemId: "0", vault: nextVault });
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
  moveItemToTrash,
  removeItem,
  setIsEditingItem,
  setIsAddingItem,
};

const useGlobal = GlobalHook(initialState, actions);

export default useGlobal;
