import { CopyIcon } from "../Icons/CopyIcon";

const ICON_SIZE: number = 20;

export function CopyBtn({ copyText }: { copyText: string }) {
  function handleClick(): void {
    if (copyText) navigator.clipboard.writeText(copyText);
  }

  return (
    <button onClick={handleClick} id="copy">
      <CopyIcon width={ICON_SIZE} />
    </button>
  );
}
