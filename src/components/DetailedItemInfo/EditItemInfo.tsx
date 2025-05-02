// import { useEffect } from "react";
import useGlobal from "../../store";
import { ItemDetail } from "../UI/ItemDetail";

interface EditItemInfoProps {
  fields: string[];
}

interface changeParamFnProps {
  state: any;
  actions: any;
  param: string;
  value: string;
};

export function EditItemInfo({ fields }: EditItemInfoProps) {
  const [ globalState, globalActions ] = useGlobal();

  // useEffect(() => {
  //   console.log(globalState.newLoginParams);
  // }, [globalState.newLoginParams]);

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
              })
            }}
          />
        )
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