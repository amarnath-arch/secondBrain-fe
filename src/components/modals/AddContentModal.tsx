import { useRef } from "react";
import Modal from "../ui/Modal";
import CrossIcon from "../icons/CrossIcon";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function AddContentModal({
  modalOpen,
  modalClose,
}: {
  modalOpen: boolean;
  modalClose: () => void;
}) {
  const titleInputRef = useRef<HTMLInputElement>(null);

  return (
    <Modal modalOpen={modalOpen} modalClose={modalClose}>
      <div className="flex flex-row-reverse">
        <CrossIcon />
      </div>
      <Input
        placeholder={"Title"}
        forwardedRef={titleInputRef}
        type={"text"}
        size="lg"
      />
      <Input
        placeholder={"Title"}
        forwardedRef={titleInputRef}
        type={"text"}
        size="lg"
      />
      <div className="mt-5">
        <Button
          text="Add Content"
          size="lg"
          disabled={false}
          loading={false}
          customClass="w-full text-center justify-center"
          variant="secondary"
        />
      </div>
    </Modal>
  );
}
