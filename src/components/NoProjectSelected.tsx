import { useState } from 'react';
import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export function NoProjectSelected({ onStartAddProject }: { onStartAddProject: () => void }) {
    return (
        <div className="mt-24 text-center w-2/3" >
            <img src={noProjectImage} alt="A Pen an a note" className="w-16 h-16 object-contain mx-auto"></img>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    );
}