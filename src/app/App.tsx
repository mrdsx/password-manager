import { Modals } from "../components/Modals/Modals";
import { Header } from "../components/Navigation/Header/Header";
import { Main } from "../components/Main/Main";
import { Sidebar } from "../components/Navigation/Sidebar/Sidebar";
import { ScrollableItems } from "../components/Navigation/ScrollableItems/ScrollableItems";
import { ItemInfo } from "../components/UI/Misc/ItemInfo/ItemInfo";
import { TabProvider } from "../providers/TabProvider";
import { SearchProvider } from "../providers/SearchProvider";
import { FolderProvider } from "../providers/FolderProvider";

export default function App(): React.ReactElement {
  return (
    <>
      <FolderProvider>
        <Modals />

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

// TODO: add feature: add/edit/delete folders
// TODO: setting creation and update time
// TODO: add other types of secure items
