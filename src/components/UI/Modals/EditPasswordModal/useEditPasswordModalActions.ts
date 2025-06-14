import { useState, useRef } from "react";
import { useEditPasswordModalContext } from "./EditPasswordModalProvider";
import { setLocalStoragePassword } from "../../../../utils/storage";
import { validateOldAndNewPasswords } from "../../../../utils/passwordMethods";

interface Actions {
  isEditPasswordModalOpen: boolean;
  errorText: string;
  oldPasswordInputRef: React.RefObject<HTMLInputElement | null>;
  newPasswordInputRef: React.RefObject<HTMLInputElement | null>;
  handleSaveBtnClick(): Promise<void>;
  handleCancelBtnClick(): void;
}

export function useEditPasswordModalActions(): Actions {
  const { isEditPasswordModalOpen, setIsEditPasswordModalOpen } =
    useEditPasswordModalContext();

  const [errorText, setErrorText] = useState<string>("");

  const oldPasswordInputRef = useRef<HTMLInputElement>(null);
  const newPasswordInputRef = useRef<HTMLInputElement>(null);

  async function handleSaveBtnClick(): Promise<void> {
    const oldPassword = (oldPasswordInputRef.current! as HTMLInputElement)
      .value;
    const newPassword = (newPasswordInputRef.current! as HTMLInputElement)
      .value;

    try {
      await validateOldAndNewPasswords(oldPassword, newPassword);
      setLocalStoragePassword(newPassword);
      setIsEditPasswordModalOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        setErrorText(error.message);
      }
    }
  }

  function handleCancelBtnClick(): void {
    setIsEditPasswordModalOpen(false);
  }

  return {
    isEditPasswordModalOpen,
    errorText,
    oldPasswordInputRef,
    newPasswordInputRef,
    handleSaveBtnClick,
    handleCancelBtnClick,
  };
}
