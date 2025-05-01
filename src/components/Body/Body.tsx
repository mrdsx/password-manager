import { Sidebar } from "../Sidebar/Sidebar";
import { ItemList } from "../ItemList/ItemList";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import "./body.modules.css";

export function Body() {
  return (
    <main>
      <Sidebar />
      <ItemList />
      <ItemDetails />
    </main>
  );
}