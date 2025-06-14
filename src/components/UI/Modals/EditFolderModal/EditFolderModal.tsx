import { useRef } from "react";
import { SaveBtn } from "../../Buttons/SaveBtn/SaveBtn";
import { CancelBtn } from "../../Buttons/CancelBtn";
import { DeleteBtn } from "../../Buttons/DeleteBtn";
import {
  Modal,
  ModalBody,
  ModalField,
  ModalActions,
} from "../../Misc/Modal/index";
import { useEditFolderModalActions } from "./useEditFolderModalActions";
import { useEditFolderModalContext } from "./EditFolderModalProvider";

export function EditFolderModal(): React.ReactElement {
  const { isEditFolderModalOpen } = useEditFolderModalContext();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const saveBtnRef = useRef<HTMLButtonElement | null>(null);

  const {
    defaultFolderName,
    handleKeyDown,
    handleInputChange,
    handleSaveBtnClick,
    handleCancelBtnClick,
    handleDeleteBtnClick,
  } = useEditFolderModalActions({ saveBtnRef });

  const isActive = isEditFolderModalOpen ? "active" : "";

  return (
    <Modal extraClassName={`edit-folder-modal ${isActive}`}>
      <ModalBody>
        <span className="heading">EDIT FOLDER</span>
        <ModalField inputRef={inputRef}>
          <label htmlFor="folder-name">Name</label>
          <input
            type="text"
            id="folder-name"
            defaultValue={defaultFolderName}
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
        <DeleteBtn onClick={handleDeleteBtnClick} />
      </ModalActions>
    </Modal>
  );
}
