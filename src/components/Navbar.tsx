import { useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import AddContentModal from "./modals/AddContentModal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";
import ShareBrainModal from "./modals/ShareBrainModal";

export default function Navbar({
  navbarTitle,
  isShared,
}: {
  navbarTitle: string;
  isShared: boolean;
}) {
  const [addContentModalOpen, setAddContentModalOpen] =
    useState<boolean>(false);
  const [shareBrainModelOpen, setShareBrainModelOpen] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const { logOut } = useAuth();

  function Logout() {
    logOut();
    navigate("/");
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-3xl">{navbarTitle}</h1>
      {!isShared && (
        <div className="flex gap-10 items-center">
          <Button
            loading={false}
            disabled={false}
            variant={"secondary"}
            size={"md"}
            text={"Share Brain"}
            startIcon={<ShareIcon size="md" />}
            onClick={() => setShareBrainModelOpen(true)}
          />
          <Button
            loading={false}
            disabled={false}
            size={"md"}
            text={"Add Content"}
            startIcon={<PlusIcon size="md" />}
            onClick={() => setAddContentModalOpen(true)}
          />
          <Button
            loading={false}
            disabled={false}
            size={"md"}
            text={"Logout"}
            onClick={Logout}
          />
          <AddContentModal
            modalOpen={addContentModalOpen}
            modalClose={() => setAddContentModalOpen(false)}
          />
          <ShareBrainModal
            modalClose={() => setShareBrainModelOpen(false)}
            modalOpen={shareBrainModelOpen}
          />
        </div>
      )}
    </div>
  );
}
