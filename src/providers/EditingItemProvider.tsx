import { useState, useRef, createContext } from "react";
import useGlobalStore, {
  LoginItem,
  State,
  Actions,
} from "../store/globalStore";

interface IEditingItemContext {
  item: LoginItem | null;
  setItem(item: LoginItem): void;
  saveItemBtnRef: React.RefObject<HTMLButtonElement | null> | undefined;
}

const initialValue: IEditingItemContext = {
  item: null,
  setItem() {},
  saveItemBtnRef: undefined,
};

export const EditingItemContext =
  createContext<IEditingItemContext>(initialValue);

export function EditingItemProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;

  const [item, setItem] = useState<LoginItem>({
    ...vault[curItemId],
  });

  const saveItemBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <EditingItemContext.Provider value={{ item, setItem, saveItemBtnRef }}>
      {children}
    </EditingItemContext.Provider>
  );
}
