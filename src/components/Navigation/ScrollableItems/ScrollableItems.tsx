import { AddItemBtn } from "../../UI/Buttons/AddItemBtn/AddItemBtn";
import { ScrollableItemsList } from "../../UI/Misc/ScrollableItemsList/ScrollableItemsList";
import "./scrollable-items.modules.css";

export function ScrollableItems(): React.ReactElement {
  return (
    <div className="items">
      <ScrollableItemsList />
      <AddItemBtn />
    </div>
  );
}
