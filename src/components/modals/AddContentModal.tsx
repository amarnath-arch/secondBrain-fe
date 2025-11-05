import { useRef, useState } from "react";
import Modal from "../ui/Modal";
import CrossIcon from "../icons/CrossIcon";
import Input from "../ui/Input";
import Button from "../ui/Button";
import axios from "axios";

export default function AddContentModal({
  modalOpen,
  modalClose,
}: {
  modalOpen: boolean;
  modalClose: () => void;
}) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<"youtube" | "tweet">("youtube");

  async function onAddContent() {
    const titleInputValue = titleInputRef.current?.value;
    const linkInputValue = linkInputRef.current?.value;
    const backendBaseURL = import.meta.env.VITE_BACKEND_URL;

    if (
      !type ||
      (titleInputValue?.length || 0) <= 0 ||
      (linkInputValue?.length || 0) <= 0
    ) {
      alert("Incomplete form ");
      return;
    }
    try {
      const response = await axios.post(
        `${backendBaseURL}/api/v1/user/content`,
        {
          title: titleInputValue,
          link: linkInputValue,
          tags: [],
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      console.log(response);
      alert("content added successfully");
    } catch (err) {
      console.error(err);
    } finally {
      modalClose();
    }
  }

  // useFetch()

  return (
    <Modal modalOpen={modalOpen} modalClose={modalClose}>
      <div className="flex flex-row-reverse" onClick={modalClose}>
        <div className="p-2 hover:bg-secondary rounded-full hover:scale-110 transition-transform duration:300 hover:-translate-y-0.5">
          <CrossIcon />
        </div>
      </div>
      <Input
        placeholder={"Title"}
        forwardedRef={titleInputRef}
        type={"text"}
        size="lg"
        customClass="placeholder:text-slate-300 placeholder:font-normal placeholder:text-md font-normal text-md text-slate-700"
      />
      <Input
        placeholder={"Link"}
        forwardedRef={linkInputRef}
        type={"text"}
        customClass="placeholder:text-slate-300 placeholder:font-normal placeholder:text-md font-normal text-md  text-slate-700"
        size="lg"
      />
      <div className="flex gap-2 my-10">
        <Button
          size="md"
          text="Tweet"
          disabled={false}
          loading={false}
          customClass="text-center justify-center  hover:!scale-102"
          variant={type == "tweet" ? "primary" : "secondary"}
          onClick={() => setType("tweet")}
        />
        <Button
          size="md"
          text="Youtube"
          disabled={false}
          loading={false}
          customClass="text-center justify-center hover:!scale-102"
          onClick={() => setType("youtube")}
          variant={type == "youtube" ? "primary" : "secondary"}
        />
      </div>
      <div className="mt-5">
        <Button
          text="Add Content"
          size="lg"
          disabled={false}
          loading={false}
          customClass="relative z-10 w-full text-center justify-center after:content-[''] after:absolute after:left-0 after:h-full after:bg-primary after:w-0 after:rounded-xl hover:after:w-full hover:text-white after:-z-10 after:transition-all after:duration-200"
          variant="secondary"
          onClick={onAddContent}
        />
      </div>
    </Modal>
  );
}
