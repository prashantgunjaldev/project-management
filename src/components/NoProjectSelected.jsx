import noProjectImg from '../assets/no-projects.png';
import Button from './Buttont';
export default function NoProjectSelected({onStartAddProj}){
    return <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImg} alt='Empty Task List' className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 mt-4 mb-4 my-4'>No Project selcted</h2>
        <p className='text-stone-400 mb-4 '>Please select project to get started</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProj}>Create new project</Button>
        </p>
    </div>
}