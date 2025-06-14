import { CancelBtn } from "../../Buttons/CancelBtn";
import { SaveBtn } from "../../Buttons/SaveBtn/SaveBtn";
import {
  Modal,
  ModalBody,
  ModalField,
  ModalActions,
} from "../../Misc/Modal/index";
import { useEditPasswordModalActions } from "./useEditPasswordModalActions";
import "./edit-password-modal.modules.css";

export function EditPasswordModal(): React.ReactElement {
  const {
    isEditPasswordModalOpen,
    errorText,
    oldPasswordInputRef,
    newPasswordInputRef,
    handleSaveBtnClick,
    handleCancelBtnClick,
  } = useEditPasswordModalActions();

  const isActive = isEditPasswordModalOpen ? "active" : "";

  return (
    <Modal extraClassName={`edit-password-modal ${isActive}`}>
      <ModalBody>
        <span className="heading">EDIT PASSWORD</span>
        <ModalField>
          <label htmlFor="old-password">Old password</label>
          <input type="password" id="old-password" ref={oldPasswordInputRef} />
        </ModalField>
        <ModalField>
          <label htmlFor="new-password">New password</label>
          <input type="password" id="new-password" ref={newPasswordInputRef} />
        </ModalField>
        <span className="edit-password-modal__error-span">{errorText}</span>
      </ModalBody>

      <ModalActions>
        <SaveBtn onClick={handleSaveBtnClick} />
        <CancelBtn onClick={handleCancelBtnClick} />
      </ModalActions>
    </Modal>
  );
}
