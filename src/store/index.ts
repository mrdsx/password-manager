// @ts-ignore
import GlobalHook from "use-global-hook";

interface LoginItem {
  serviceName: string,
  login: string,
  password: string,
  website: string
}

type Items = Record<string, LoginItem>;

const initialState: Record<string, number | Items> = {
  curItemId: 0,
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
  addItemToVault: (store: any, newItem: LoginItem) => {
    const vaultItems = store.state.vault;

    const keys: string[] = Object.keys(vaultItems);
    const lastId: number = Number(keys[keys.length - 1]);

    const updatedItems = {
      ...vaultItems,
      [lastId+1]: newItem
    };
    store.setState({ vault: updatedItems });
  },
  setCurItemId: (store: any, itemId: string) => {
    const newCurItemId = itemId;
    store.setState({ curItemId: newCurItemId });
  }
}

const useGlobal = GlobalHook(initialState, actions);

export default useGlobal;
