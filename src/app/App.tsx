import { Header } from "../components/Navigation/Header/Header";
import { Body } from "../components/Body/Body";
import { Sidebar } from "../components/Navigation/Sidebar/Sidebar";
import { ScrollableItems } from "../components/Navigation/ScrollableItems/ScrollableItems";
import { ItemDetails } from "../components/UI/Misc/ItemInfo/ItemInfo";
import { SearchProvider } from "../providers/SearchProvider";
import { TabProvider } from "../providers/TabProvider";

export default function App() {
  return (
    <>
      <SearchProvider>
        <Header />
        <Body>
          <TabProvider>
            <Sidebar />
            <ScrollableItems />
          </TabProvider>
          <ItemDetails />
        </Body>
      </SearchProvider>
    </>
  );
}
