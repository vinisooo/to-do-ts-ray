
import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";
import { iPlan, iTask } from "../../interfaces/interfaces";

interface iNewTaskModalProps{
    planId: number;
}

const NewTaskModal = ({planId}: iNewTaskModalProps)=>{
    const { setNewTaskModal, newTaskModal, plans, setPlans } = useContext(TasksContext);

    const [ name, setName ] = useState<string>("");
    const [ date, setDate ] = useState<string>("");
    const [ important, setImportant ] = useState<boolean>(false);

    const submitTask = (e: any) => {
        e.preventDefault();
        const newTask: iTask = {
            name: name,
            date: date,
            important: important
        }
        console.log(newTask)
        const plansArr = plans;
        plansArr.map((plan) => {
            if(plan.id === planId){
                plan.tasks.push(newTask);
            }
        })
        setPlans(plansArr);
        console.log(plansArr);
    }

    return(
        <div className="modalBG">
            <div className="animate__animated animate__fadeInUp modal">
                <div className="container">
                    <header>
                        <h2>Criar Novo Plano</h2>
                        <button onClick={()=>setNewTaskModal(false)} className="btn-def">X</button>
                    </header>
                    <form onSubmit={submitTask}>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="título da tarefa..."/>
                        <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" placeholder="data para realização..."/>
                        <div>
                            <input onChange={()=>setImportant(!important)} id="important" type="checkbox"/>
                            <label htmlFor="important">Tarefa importante</label>
                        </div>
                        <button className="submit-def-btn">Adicionar tarefa</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewTaskModal;
