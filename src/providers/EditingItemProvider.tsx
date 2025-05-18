// prettier-ignore
import {
  createContext,
  useState,
  useRef,
} from "react";
import useGlobalStore, {
  LoginItem,
  State,
  Actions,
} from "../store/globalStore";

export interface EditingItemContextType {
  item: LoginItem;
  setItem(item: LoginItem): void;
  saveItemBtnRef: React.RefObject<HTMLButtonElement | null>;
}

export const EditingItemContext = createContext<EditingItemContextType | null>(
  null
);

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
