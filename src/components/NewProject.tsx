import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { IProject } from "../model/project.model";

export default function NewProject({ onCancel, saveProject }: { onCancel: () => void, saveProject: (project: IProject) => void }) {
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    const dueDate = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    const onSave = () => {
        if (!title.current?.value || !description.current?.value || !dueDate.current?.value) {
            // show error modal
            modalRef.current?.showModal();
            return;
        }

        saveProject({
            id: Math.random().toString(),
            title: title.current?.value,
            description: description.current?.value,
            dueDate: dueDate.current?.value,
            tasks: []
        });
    };

    const handleClose = () => {
        modalRef.current?.close();
    }




    return (
        <>
            <div className="w-[35rem] mt-16">
                <menu className="flex itmes-center justify-end gap-4 my-4">
                    <li><button className="px-6 py-2 text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                    <li><button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md" onClick={() => onSave()}>Save</button></li>
                </menu>

                <div>
                    <Input label="Title" ref={title} />
                    <Input label="Description" isRichText ref={description} />
                    <Input type="date" label="Due Date" ref={dueDate} />
                </div>

            </div>
            <Modal ref={modalRef}  message="Please enter all fields!"/>
        </>

    )
}