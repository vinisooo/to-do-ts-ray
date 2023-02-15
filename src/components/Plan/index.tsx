import { iPlan } from "../../interfaces/interfaces";
import Styled from "./style.module.css";

import binIcon from "../../assets/bin-icon.svg";
import { useState } from "react";
import Task from "../Task";

import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";


interface iPlanProps{
    plan: iPlan
}

const Plan = ({plan}: iPlanProps) => {
    const [ displayTasks, setDisplayTasks ] = useState<boolean>(false);

    const { setNewTaskModal, setCurrentPlan } = useContext(TasksContext);

    const openNewTaskModal = () => {
        setNewTaskModal(true);
        setCurrentPlan(plan.id);
    }
    
    return (
        <div className={`${Styled.plan} container`}>
            <header className={displayTasks ? Styled.openPlan : ""}>
                <h3>{plan.name}</h3>
                <div>
                    <button onClick={()=>setDisplayTasks(!displayTasks)} className={Styled.displayTasksBtn}>{displayTasks ? "Esconder " : "Mostrar "} tarefas</button>
                    <button className="btn-def btn-def-small" onClick={openNewTaskModal}>
                        +
                    </button>
                    <button className="btn-def btn-def-small">
                        <img src={binIcon}/>
                    </button>
                </div>
            </header>{
                displayTasks &&
                <ul className={Styled.tasksList}>
                    {
                        plan.tasks.map((task) => {
                            return(
                                <Task task={task}/>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )

}

export default Plan;
