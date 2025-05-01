// @ts-ignore
import GlobalHook from "use-global-hook";

interface LoginItem {
  serviceName: string,
  login: string,
  password: string,
  website: string
}

type VaultItems = Record<number, LoginItem>;

interface InitialState {
  curItemId: number;
  isAddingItem: boolean;
  vault: VaultItems;
}

const initialState: InitialState = {
  curItemId: 0,
  isAddingItem: false,
  vault: {
    0: {
      serviceName: "",
      login: "",
      password: "",
      website: ""
    },
    1: {
      serviceName: "Vite",
      login: "oho123",
      password: "12345678",
      website: "https://vite.dev"
    },
    2: {
      serviceName: "GitHub",
      login: "mrdsx",
      password: "12345678",
      website: "https://github.com"
    },
    3: {
      serviceName: "Google",
      login: "andre0.castlegames@gmail.com",
      password: "12345678",
      website: "https://google.com"
    }
  }
}

const actions = {
  setCurItemId: (store: any, itemId: string) => {
    const newCurItemId = itemId;
    store.setState({ curItemId: newCurItemId });
  },
  setIsAddingItem: (store: any, isAdding: boolean) => {
    const nextIsAdding = isAdding;
    store.setState({ isAddingItem: nextIsAdding })
  },
  addItemToVault: (store: any, newItem: LoginItem) => {
    const { vault } = store.state;

    const keys: string[] = Object.keys(vault);
    const lastId: number = Number(keys[keys.length - 1]);

    const updatedItems = {
      ...vault,
      [lastId+1]: newItem
    };
    store.setState({ vault: updatedItems });
  }
}

const useGlobal = GlobalHook(initialState, actions);

export default useGlobal;
