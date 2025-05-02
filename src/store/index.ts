// @ts-ignore
import GlobalHook from "use-global-hook";

interface LoginItem {
  name: string,
  login: string,
  password: string,
  website: string
}

type VaultItems = Record<number, LoginItem>;

interface InitialState {
  curItemId: string;
  isEditingItem: boolean;
  isAddingItem: boolean;
  vault: VaultItems;
  newLoginParams: Partial<LoginItem>;
}

const initialState: InitialState = {
  curItemId: "0",
  isEditingItem: false,
  isAddingItem: false,
  vault: {
    "0": {
      name: "",
      login: "",
      password: "",
      website: ""
    }
  },
  newLoginParams: {}
}

const actions = {
  setCurItemId: (store: any, itemId: string) => {
    const nextCurItemId = itemId;
    store.setState({ curItemId: nextCurItemId });
  },

  setIsEditingItem: (store: any, isEditing: boolean) => {
    const nextIsEditing = isEditing;
    store.setState({ isEditingItem: nextIsEditing })
  },

  addItem: (store: any, newItem: LoginItem) => {
    const { vault } = store.state;

    const keys: string[] = Object.keys(vault);
    const lastId: number = Number(keys[keys.length - 1]);

    const nextItems = {
      ...vault,
      [lastId+1]: newItem
    };
    store.setState({ vault: nextItems });
  },

  removeItem: (store: any, itemId: number) => {
    const { vault } = store.state;

    const nextId = "0";
    delete vault[itemId];
    store.setState({ curItemId: nextId });
  },

  setNewLoginParam: (store: any, param: string, value: string) => {
    const { newLoginParams } = store.state;

    const nextParams = {
      ...newLoginParams,
      [param.toLowerCase()]: value
    };
    store.setState({ newLoginParams: nextParams })
  },

  clearNewLoginParams: (store: any) => {
    store.setState({ newLoginParams: {} })
  },

  setIsAddingItem: (store: any, value: boolean) => {
    const nextValue = value;
    store.setState({ isEditingItem: nextValue, isAddingItem: nextValue });
  }
}

const useGlobal = GlobalHook(initialState, actions);

export default useGlobal;
