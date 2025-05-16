import { AddItemBtn } from "../../UI/Buttons/AddItemBtn/AddItemBtn";
import "./scrollable-items.modules.css";
import { ScrollableItemsList } from "../../UI/Misc/ScrollableItemsList/ScrollableItemsList";

export function ScrollableItems() {
  return (
    <div className="items">
      <ScrollableItemsList />
      <AddItemBtn />
    </div>
  );
}
