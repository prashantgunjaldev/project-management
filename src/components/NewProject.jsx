import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const model = useRef();

    function handleSave(){
        const eTitle = title.current.value;
        const eDescription = description.current.value;
        const eDueDate = dueDate.current.value;

        //validation
        if(eTitle.trim() === '' || 
        eDescription.trim() === '' || 
        eDueDate.trim() === ''){
            model.current.open();
            return;
        }
        onAdd({
            title: eTitle,
            description: eDescription,
            dueDate: eDueDate
        });
    }
    return <>
        <Modal ref={model} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Opps... you missed the values</p>
            <p className="text-stone-600 mb-4">Please provide valid values</p>
        </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950"
                        onClick={onCancel}>Cancel</button></li>
                    <li>
                        <button className="text-stone-50 bg-stone-800 hover:bg-stone-950 px-6 py-2 rounded-md"
                        onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea/>
                    <Input type="date" ref={dueDate} label="Due Date"/>
                </div>
            </div>
    </>;
}