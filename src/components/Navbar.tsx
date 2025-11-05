import { useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import AddContentModal from "./modals/AddContentModal";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-3xl">All Notes</h1>
      <div className="flex gap-10 items-center">
        <Button
          loading={false}
          disabled={false}
          variant={"secondary"}
          size={"md"}
          text={"Share Brain"}
          startIcon={<ShareIcon size="md" />}
        />
        <Button
          loading={false}
          disabled={false}
          size={"md"}
          text={"Add Content"}
          startIcon={<PlusIcon size="md" />}
          onClick={() => setModalOpen(true)}
        />
        <AddContentModal
          modalOpen={modalOpen}
          modalClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}
