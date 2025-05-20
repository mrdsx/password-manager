import { useRef } from "react";
import { SaveBtn } from "../../Buttons/SaveBtn/SaveBtn";
import { CancelBtn } from "../../Buttons/CancelBtn";
import { Modal } from "../../Misc/Modal/Modal";
import { ModalBody } from "../../Misc/Modal/ModalBody";
import { ModalField } from "../../Misc/Modal/ModalField";
import { ModalActions } from "../../Misc/Modal/ModalActions";
import { UseModalActions } from "./UseModalActions";
import { DeleteFolderBtn } from "../../Buttons/FoldersActionsBtnFolder/DeleteFolderBtn";

export function EditFolderModal(): React.ReactElement {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const saveBtnRef = useRef<HTMLButtonElement | null>(null);

  const {
    defaultFolderName,
    handleKeyDown,
    handleInputChange,
    handleSaveBtnClick,
    handleCancelBtnClick,
  } = UseModalActions({ saveBtnRef });

  return (
    <Modal>
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
        <DeleteFolderBtn />
      </ModalActions>
    </Modal>
  );
}
