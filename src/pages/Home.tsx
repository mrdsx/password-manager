import { Main } from "../components/Main/Main";
import { ModalsWrapper } from "../components/ModalsWrapper/ModalsWrapper";
import { Header } from "../components/Navigation/Header/Header";
import { ScrollableItems } from "../components/Navigation/ScrollableItems/ScrollableItems";
import { Sidebar } from "../components/Navigation/Sidebar/Sidebar";
import { ItemInfo } from "../components/UI/Misc/ItemInfo/ItemInfo";
import { FolderProvider } from "../providers/FolderProvider";
import { SearchProvider } from "../providers/SearchProvider";
import { TabProvider } from "../providers/TabProvider";

export function Home(): React.ReactElement {
  return (
    <>
      <FolderProvider>
        <ModalsWrapper />

        <SearchProvider>
          <Header />
          <Main>
            <TabProvider>
              <Sidebar />
              <ScrollableItems />
            </TabProvider>
            <ItemInfo />
          </Main>
        </SearchProvider>
      </FolderProvider>
    </>
  );
}
