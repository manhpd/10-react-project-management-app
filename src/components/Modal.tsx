// show an alert modal with a message using useImperativeHandle and forwardRef

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ message }: {message : string}, ref: any) 
    {
        const dialog = useRef<HTMLDialogElement>(null);

        useImperativeHandle(ref, () => {
            return {
                showModal() {
                    dialog.current?.showModal();
                }
            }
        });

        const handleClose = () => {
            dialog.current?.close();
        }

        return createPortal(
            <dialog ref={dialog} >
                <div className="bg-white p-8 rounded-md">
                    <p>{message}</p>
                    <form method="dialog">
                        <button className="bg-stone-800 text-stone-50 px-4 py-2 mt-4" >Close</button>
                    </form>
                </div>
            </dialog>, document.getElementById("modal-root") as HTMLDivElement
        );

    });

export default Modal;