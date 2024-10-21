import { Input } from "./Input";

export default function NewProject({ onCancel }: { onCancel: () => void }) {
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex itmes-center justify-end gap-4 my-4">
                <li><button className="px-6 py-2 text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                <li><button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">Save</button></li>
            </menu>

            <div>
                <Input label="Title"/>
                <Input label="Description" isRichText/>
                <Input label="Due Date" />
            </div>
        </div>
    )
}