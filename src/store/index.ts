// @ts-ignore
import GlobalHook from "use-global-hook";

interface LoginItem {
  name: string,
  login: string,
  password: string,
  website: string
}

type VaultItems = Record<number, LoginItem>;

interface State {
  curItemId: string;
  isEditingItem: boolean;
  isAddingItem: boolean;
  vault: VaultItems;
  newLoginParams: Partial<LoginItem>;
}

const state: State = {
  curItemId: "0",
  isEditingItem: false,
  isAddingItem: false,
  vault: {
    "0": {
      name: "",
      login: "",
      password: "",
      website: ""
    },
    "1": {
      name: "Google",
      login: "OHO123",
      password: "571384",
      website: "google.com"
    },
    "2": {
      name: "YouTube",
      login: "OHO123",
      password: "571134133413384",
      website: "youtube.com"
    }
  },
  newLoginParams: {}
};

const actions = {
  setCurItemId: (store: any, itemId: string) => {
    const nextCurItemId = itemId;
    store.setState({ curItemId: nextCurItemId });
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

  setIsEditingItem: (store: any, isEditing: boolean) => {
    const nextIsEditing = isEditing;
    store.setState({ isEditingItem: nextIsEditing });
  },

  // ! REMOVE
  // !setExistingLoginParam: (store: any, param: string, value: string) => {
  // !  const { vault, curItemId } = store.state;
  // !  const curItemParams = vault[curItemId];

  // !  const nextParams = {
  // !    ...curItemParams,
  // !    [param.toLowerCase()]: value
  // !  };
  // !},

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
};

const useGlobal = GlobalHook(state, actions);

export default useGlobal;
