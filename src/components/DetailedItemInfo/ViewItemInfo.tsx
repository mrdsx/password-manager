import { ItemDetail } from "../UI/ItemDetail";
import { ItemInfoProps } from "./DetailedItemInfo";

export function ViewItemInfo({ fields }: ItemInfoProps) {
  const [ name, login, password, website ] = fields;

  return (
    <>
      <ItemDetail 
        labelContent="Name"
        value={name}
        readOnly={true}
        hasCopyBtn={false}
      />
      <ItemDetail 
        labelContent="Login"
        value={login}
        readOnly={true}
      />
      <ItemDetail 
        labelContent="Password"
        value={password}
        readOnly={true}
        type="password"
      />
      <ItemDetail 
        labelContent="Website"
        value={website}
        readOnly={true}
      />
    </>
  );
}