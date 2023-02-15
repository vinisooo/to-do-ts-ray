import Styled from "./style.module.css";

import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";


const Header = ()=>{

    const { setNewPlanModal } = useContext(TasksContext);

    return(
        <header className={`container ${Styled.taskHeader}`}>
            <h1>Criar Novo Plano</h1>
            <button onClick={()=>setNewPlanModal(true)}  className="btn-def">+</button>
        </header>
    )

}

export default Header