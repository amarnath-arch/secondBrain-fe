import type React from "react";

export default function Modal({
  modalOpen,
  modalClose,
  children,
}: //   setModalOpen,
{
  modalOpen: boolean;
  children: React.ReactNode;
  modalClose: () => void;
}) {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-200/80 z-50 flex items-center justify-center">
      <div className="bg-slate-50 p-8 rounded-xl shadow-2xl w-110 shadow-secondary ">
        <h2 className="text-xl font-semibold">{children}</h2>
      </div>
    </div>
  );
}
