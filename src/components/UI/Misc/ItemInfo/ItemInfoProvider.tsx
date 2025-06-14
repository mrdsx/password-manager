import { useState, useRef, createContext, useContext } from "react";
import useGlobalStore, {
  LoginItem,
  State,
  Actions,
} from "../../../../store/globalStore";

interface IItemDetailsContext {
  item: LoginItem | null;
  setItem(item: LoginItem): void;
  saveItemBtnRef: React.RefObject<HTMLButtonElement | null> | null;
}

const initialValue: IItemDetailsContext = {
  item: null,
  setItem() {},
  saveItemBtnRef: null,
};

const ItemDetailsContext = createContext<IItemDetailsContext>(initialValue);

export function EditingItemDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [globalState, _globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;

  const [item, setItem] = useState<LoginItem>({
    ...vault[curItemId],
  });

  const saveItemBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <ItemDetailsContext.Provider value={{ item, setItem, saveItemBtnRef }}>
      {children}
    </ItemDetailsContext.Provider>
  );
}

export function useItemDetailsContext() {
  return useContext(ItemDetailsContext);
}
