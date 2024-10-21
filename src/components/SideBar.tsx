import Button from "./Button";

export default function SideBar({ onStartAddProject }: { onStartAddProject: () => void }) {
    const handleAddProject = () => {
        onStartAddProject();
    }
    return (
        <aside className="w-1/3 px-8 h-screen py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={handleAddProject} >+ Add project</Button>
            </div>
        </aside>
    );
}