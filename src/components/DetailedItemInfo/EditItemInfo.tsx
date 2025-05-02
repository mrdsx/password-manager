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

  return (
    <>
      {fields.map((field) => {
        const type = (field === "Password") ? "password" : "text";

        return (
          <ItemDetail
            labelContent={field}
            hasCopyBtn={false}
            type={type}
            onChangeFn={(e: MouseEvent) => {
              changeParam({
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

function changeParam(props: changeParamFnProps): void {
  const { state, actions, param, value } = props;

  if (state.isAddingItem) {
    actions.setNewLoginParam(param, value);
  }
}