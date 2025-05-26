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
  folder: string;
  details: LoginItemDetails | string;
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
  deleteVault(): void;
}

const initialVault = {
  "0": {
    favorite: false,
    inTrash: false,
    folder: "No folder",
    details: { name: "", login: "", password: "", website: "" },
  },
};

// TODO: add item with id 0 if it doesn't exist
const initialState: State = {
  curItemId: "0",
  isEditingItem: false,
  isAddingItem: false,
  vault: {
    ...(JSON.parse(localStorage.getItem("vault") as string) || initialVault),
  },
};

function setCurItemId(store: Store<State, Actions>, itemId: string): void {
  const nextValue = itemId;
  store.setState({ curItemId: nextValue });
}

function addItem(store: Store<State, Actions>, newItem: LoginItem): void {
  const { vault }: State = store.state;

  const keys: string[] = Object.keys(vault);
  const lastId: number = Number(keys[keys.length - 1]);

  const nextVault = {
    ...vault,
    [lastId + 1]: { ...newItem },
  };
  store.setState({ vault: nextVault });
  localStorage.setItem("vault", JSON.stringify(nextVault));
}

function editItemById(
  store: Store<State, Actions>,
  newItem: LoginItem,
  itemId: string
): void {
  const { vault }: State = store.state;

  const nextVault = {
    ...vault,
    [itemId]: { ...newItem },
  };
  store.setState({ vault: nextVault });
  localStorage.setItem("vault", JSON.stringify(nextVault));
}

function removeItem(store: Store<State, Actions>, itemId: string): void {
  const { vault }: State = store.state;

  const nextVault = {
    ...vault,
  };
  delete nextVault[itemId];
  store.setState({ curItemId: "0", vault: nextVault });
  localStorage.setItem("vault", JSON.stringify(nextVault));
}

function setIsEditingItem(
  store: Store<State, Actions>,
  isEditing: boolean
): void {
  const nextValue = isEditing;
  store.setState({ isEditingItem: nextValue });
}

function setIsAddingItem(
  store: Store<State, Actions>,
  isAdding: boolean
): void {
  const nextValue = isAdding;
  store.setState({ isEditingItem: nextValue, isAddingItem: nextValue });
}

function deleteVault(store: Store<State, Actions>): void {
  const nextVault = {
    0: {
      favorite: false,
      inTrash: false,
      folder: "No folder",
      details: { name: "", login: "", password: "", website: "" },
    },
  };

  store.setState({ vault: nextVault });
  localStorage.setItem("vault", JSON.stringify(nextVault));
}

const actions = {
  setCurItemId,
  addItem,
  editItemById,
  removeItem,
  setIsEditingItem,
  setIsAddingItem,
  deleteVault,
};

const useGlobalStore = GlobalHook<State, Actions>(initialState, actions);

export default useGlobalStore;
