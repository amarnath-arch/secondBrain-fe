import axios from "axios";
import CopyIcon from "../icons/CopyIcon";
import CrossIcon from "../icons/CrossIcon";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

export default function ShareBrainModal({
  modalOpen,
  modalClose,
}: {
  modalOpen: boolean;
  modalClose: () => void;
}) {
  async function shareBrain() {
    try {
      const backendBaseURL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(
        `${backendBaseURL}/api/v1/user/brain/share`,
        {
          share: true,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      const hash = response.data.hash;

      const frontEndUrl = import.meta.env.VITE_FRONTEND_URL;

      navigator.clipboard.writeText(`${frontEndUrl}/brain/${hash}`);
      alert("text Copied");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Modal modalClose={modalClose} modalOpen={modalOpen}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Share Your Brain</h2>
        <div
          className="p-2 rounded-full hover:bg-secondary transition-all hover:-translate-y-0.5 duration-300 cursor-pointer"
          onClick={modalClose}
        >
          <CrossIcon />
        </div>
      </div>

      <p className="mt-7 text-md text-slate-700 font-normal">
        Share your entire collection of notes, documents, tweets and videos with
        others. They'll be able to import your document into their own Second
        Brain.
      </p>

      <Button
        text="Share Your Brain"
        size="lg"
        disabled={false}
        loading={false}
        customClass="mt-6 relative z-10 w-full text-center justify-center after:content-[''] after:absolute after:left-0 after:h-full after:bg-primary after:w-0 after:rounded-xl hover:after:w-full hover:text-white after:-z-10 after:transition-all after:duration-200"
        variant="secondary"
        startIcon={<CopyIcon size="lg" />}
        onClick={shareBrain}
      />
    </Modal>
  );
}
