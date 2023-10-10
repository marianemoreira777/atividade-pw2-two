import Style from './style.module.css';
import Task from '../Task';
import Input from '../Input';
import {useState, useEffect} from 'react';

function List(){
    const [list, setList] = useState([])
    const [task, setTask] = useState("")
    useEffect(() => {
        if(task !== "" ){
            setList([...list, task])
            setTask("")
        }
    }, [task, list])
    useEffect(() => {
        if(list !== null && list !== ""){
            const saveList = JSON.parse(localStorage.getItem("To-do"))
            if(saveList){
                setList(saveList);
            }
        }
    }, [])

    const addTask = (item) => {
        const novoItem = {
            id:Math.random(),
            task:item,
            status:false,
        }
        setTask(novoItem)
        localStorage.setItem("To-do", JSON.stringify([...list, novoItem]))
    }
    const deleteTask = (id) => {
        const novaLista = list.filter((item) => item.id !== id)
        setList(novaLista)
    }

    const updateStatus = (id) => {
        const updateItem = list.map((item) => {
            if(item.id === id){
                return{...item, status:!item.status}
            }
            return item
        })
        setList(updateItem)
    }
    return(
        <>
        <Input handleText={addTask}/>
        <div className={`${Style.indicator} ${Style.container}`}>
            <p>Tecnologias criadas <span>{list ? list.length : 0}</span></p>
            <p style={{color: "#8284fa" }}>
                concluidas <span>{list.filter((item) => item.status !== false).length} de {list.length}</span>
            </p>
        </div>
        {list.length === 0 && (
            <div className={`${Style.boxText} ${Style.container}`}>
                <h3>Você ainda não tem tecnologias cadastradas</h3>
                <p>Crie tecnologias e organize seus itens a fazer</p>
            </div>
        )}
        <Task listTasks={list} handleDelete={deleteTask} handleStatus={updateStatus}/>
        </>
    )
}


export default List;