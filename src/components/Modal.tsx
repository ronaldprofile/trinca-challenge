import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import clsx from "clsx";

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

export function Modal({ isOpen, closeModal, children }: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/90 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className={
                      "absolute top-9 right-4 hover:scale-110 hover:rotate-90 transition-transform"
                    }
                    title="fechar modal"
                    onClick={closeModal}
                  >
                    <X size={24} />
                  </button>

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

interface ModalTitleProps {
  title: string;
  className?: string;
}

export function ModalTitle({ title, className }: ModalTitleProps) {
  return (
    <Dialog.Title className={clsx(`text-[32px] font-bold`, className)}>
      {title}
    </Dialog.Title>
  );
}

interface ModalDescriptionProps {
  description: string;
  className?: string;
}

export function ModalDescription({
  description,
  className
}: ModalDescriptionProps) {
  return (
    <Dialog.Description className={clsx(`leading-tight`, className)}>
      {description}
    </Dialog.Description>
  );
}
