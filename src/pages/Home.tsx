import { useEffect } from "react";
import useAuthStore, { Actions, State } from "../store/authStore";
import { Main } from "../components/UI/Misc/Main/Main";
import { ModalsWrapper } from "../components/ModalsWrapper/ModalsWrapper";
import { Header } from "../components/Navigation/Header/Header";
import { FolderProvider } from "../providers/FolderProvider";
import { SearchProvider } from "../providers/SearchProvider";
import { ModalsProvider } from "../providers/ModalsProvider";

export function Home(): React.ReactElement {
  const [_isLoggedIn, setIsLoggedIn] = useAuthStore(
    (state: State) => state.isRegistered,
    (actions: Actions) => actions.setIsLoggedIn
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.shiftKey && event.key === "L") {
        setIsLoggedIn(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <ModalsProvider>
        <FolderProvider>
          <ModalsWrapper />

          <SearchProvider>
            <Header />
            <Main />
          </SearchProvider>
        </FolderProvider>
      </ModalsProvider>
    </>
  );
}
