import { CopyBtn } from "./CopyBtn";

interface ItemDetailProps {
  labelContent: string;
  value: string;
  readOnly: boolean;
  type?: string;
}

export function ItemDetail({ labelContent, value, readOnly, type = "text" }: ItemDetailProps) {
  const id = labelContent.toLowerCase();
  return (
    <div className="detail">
      <div className="field">
        <label htmlFor={id}>{labelContent}</label>
        <input type={type} id={id}
          // @ts-ignore
          value={value}
          readOnly={readOnly}
          />
      </div>
      <div className="detail-actions">
        <CopyBtn copyText={value} />
      </div>
    </div>
  )
}