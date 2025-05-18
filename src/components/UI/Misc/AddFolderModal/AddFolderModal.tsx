import { useRef } from "react";
import { UseModalActions } from "./UseModalActions";
import { SaveBtn } from "../../Buttons/SaveBtn";
import { CancelBtn } from "../../Buttons/CancelBtn";
import { Modal } from "../Modal/Modal";
import { ModalBody } from "../Modal/ModalBody";
import { ModalField } from "../Modal/ModalField";
import { ModalActions } from "../Modal/ModalActions";
import "./add-folder-modal.modules.css";

export function AddFolderModal(): React.ReactElement {
  const { handleInputChange, handleSaveBtnClick, handleCancelBtnClick } =
    UseModalActions();

  const inputRef = useRef(null);
  const saveBtnRef = useRef<HTMLButtonElement | null>(null);

  function handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter") saveBtnRef.current?.click();
  }

  return (
    <Modal>
      <ModalBody>
        <h2>Add folder</h2>
        <ModalField inputRef={inputRef}>
          <label htmlFor="folder-name">Name</label>
          <input
            type="text"
            id="folder-name"
            tabIndex={0}
            ref={inputRef}
            onChange={handleInputChange}
            // @ts-ignore
            onKeyDown={handleKeyDown}
          />
        </ModalField>
      </ModalBody>

      <ModalActions>
        <SaveBtn onClick={handleSaveBtnClick} ref={saveBtnRef} />
        <CancelBtn onClick={handleCancelBtnClick} />
      </ModalActions>
    </Modal>
  );
}
