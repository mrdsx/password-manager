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
  curItemId: number;
  isEditingItem: boolean;
  isAddingItem: boolean;
  vault: VaultItems;
  newLoginParams: Partial<LoginItem>;
}

const initialState: InitialState = {
  curItemId: 0,
  isEditingItem: false,
  isAddingItem: false,
  vault: {
    0: {
      name: "",
      login: "",
      password: "",
      website: ""
    },
    1: {
      name: "Vite",
      login: "oho123",
      password: "12345678",
      website: "https://vite.dev"
    },
    2: {
      name: "GitHub",
      login: "mrdsx",
      password: "12345678",
      website: "https://github.com"
    },
    3: {
      name: "Google",
      login: "andre0.castlegames@gmail.com",
      password: "12345678",
      website: "https://google.com"
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

  addItemToVault: (store: any, newItem: LoginItem) => {
    const { vault } = store.state;

    const keys: string[] = Object.keys(vault);
    const lastId: number = Number(keys[keys.length - 1]);

    const nextItems = {
      ...vault,
      [lastId+1]: newItem
    };
    store.setState({ vault: nextItems });
  },

  setNewLoginParam: (store: any, param: string, value: string) => {
    const { newLoginParams } = store.state;

    const nextParams = {
      ...newLoginParams,
      [param]: value
    };
    store.setState({ newLoginParams: nextParams })
  },

  setIsAddingItem: (store: any, value: boolean) => {
    const nextValue = value;
    store.setState({ isEditingItem: nextValue, isAddingItem: nextValue });
  }
}

const useGlobal = GlobalHook(initialState, actions);

export default useGlobal;
