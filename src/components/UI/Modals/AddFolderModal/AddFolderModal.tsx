import { useRef } from "react";
import { useAddFolderModalContext } from "./AddFolderModalProvider";
import { useAddFolderModalActions } from "./useAddFolderModalActions";
import { SaveBtn } from "../../Buttons/SaveBtn/SaveBtn";
import { CancelBtn } from "../../Buttons/CancelBtn";
import {
  Modal,
  ModalBody,
  ModalField,
  ModalActions,
} from "../../Misc/Modal/index";

export function AddFolderModal(): React.ReactElement {
  const { isAddFolderModalOpen } = useAddFolderModalContext();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const saveBtnRef = useRef<HTMLButtonElement | null>(null);

  const isActive = isAddFolderModalOpen ? "active" : "";

  const {
    handleInputChange,
    handleKeyDown,
    handleSaveBtnClick,
    handleCancelBtnClick,
  } = useAddFolderModalActions({ saveBtnRef });

  return (
    <Modal extraClassName={`add-folder-modal ${isActive}`}>
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
