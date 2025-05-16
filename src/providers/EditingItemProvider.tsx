// prettier-ignore
import {
  createContext,
  useState,
  useRef,
  ReactNode,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import useGlobal, { LoginItem, State, Actions } from "../store/store";

export type EditingItemContextType = {
  item: LoginItem | Partial<LoginItem>;
  setItem: Dispatch<SetStateAction<LoginItem | Partial<LoginItem>>>;
  saveBtnRef: RefObject<HTMLButtonElement | null>;
};

export const EditingItemContext = createContext<EditingItemContextType | null>(
  null
);

export function EditingItemProvider({ children }: { children: ReactNode }) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId } = globalState;

  const [item, setItem] = useState<LoginItem | Partial<LoginItem>>({
    ...vault[curItemId],
  });

  const saveBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <EditingItemContext.Provider value={{ item, setItem, saveBtnRef }}>
      {children}
    </EditingItemContext.Provider>
  );
}
