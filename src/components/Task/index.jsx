import Style from './style.module.css';
import {AiOutlineDelete} from 'react-icons/ai';

function Task({listTasks, handleDelete, handleStatus}){
    return(
        <>
        {listTasks.map((task) => (
            <div className={Style.task} key={task.id}>
                <input type="checkbox" checked={task.status} onChange={() => handleStatus(task.id)} />
                <label className={Style.check}>
                </label>
                <p>
                    {task.task}
                </p>
                <button onClick={() => handleDelete(task.id)}>
                <AiOutlineDelete/>
                </button>
            </div>
            ))
        }
        </>
    )
};

export default Task;