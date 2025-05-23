import { useContext, useRef } from "react";
import { AddFolderModalContext } from "../../../../providers/AddFolderModalProvider";
import { UseModalActions } from "./UseModalActions";
import { SaveBtn } from "../../Buttons/SaveBtn/SaveBtn";
import { CancelBtn } from "../../Buttons/CancelBtn";
import { Modal } from "../../Misc/Modal/Modal";
import { ModalBody } from "../../Misc/Modal/ModalBody";
import { ModalField } from "../../Misc/Modal/ModalField";
import { ModalActions } from "../../Misc/Modal/ModalActions";
import "./add-folder-modal.modules.css";

export function AddFolderModal(): React.ReactElement {
  const { isAddFolderModalOpen } = useContext(AddFolderModalContext);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const saveBtnRef = useRef<HTMLButtonElement | null>(null);

  const modalClassName = isAddFolderModalOpen
    ? "add-folder-modal active"
    : "add-folder-modal";

  const {
    handleInputChange,
    handleKeyDown,
    handleSaveBtnClick,
    handleCancelBtnClick,
  } = UseModalActions({ saveBtnRef });

  return (
    <Modal extraClassName={modalClassName}>
      <ModalBody>
        <span className="heading">ADD FOLDER</span>
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
