import useGlobal from "../../store";
import { ItemDetail } from "../UI/ItemDetail";
import { ItemInfoProps } from "./DetailedItemInfo";

interface changeParamFnProps {
  state: any;
  actions: any;
  param: string;
  value: string;
}

export function EditItemInfo({ fields }: ItemInfoProps) {
  const [ globalState, globalActions ] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;

  return (
    <>
      {fields.map((field) => {
        const type = (field === "Password") ? "password" : "text";
        const value = !isAddingItem ?
        vault[curItemId][field.toLowerCase()] :
        "";

        return (
          <ItemDetail
            labelContent={field}
            hasCopyBtn={false}
            type={type}
            defaultValue={value}
            onChangeFn={(e: MouseEvent) => {
              changeItemParam({
                state: globalState,
                actions: globalActions,
                param: field,
                value: (e.target as any).value
              });
            }}
          />
        );
      })}
    </>
  );
}

function changeItemParam(props: changeParamFnProps): void {
  const { state, actions, param, value } = props;
  const { isEditingItem, isAddingItem } = state;

  const editingExistingItem = (isEditingItem && !isAddingItem);

  if (editingExistingItem) {
    actions.setExistingLoginParam(param, value);
  } else {
    actions.setNewLoginParam(param, value);
  }
}