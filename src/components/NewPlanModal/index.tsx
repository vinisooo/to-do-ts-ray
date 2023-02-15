import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";
import { iPlan } from "../../interfaces/interfaces";

const NewPlanModal = ()=>{
    const { setNewPlanModal, setPlans, plans } = useContext(TasksContext);

    const [planName, setPlanName] = useState<string>("");

    const setNewPlan = () => {
        const treatedName = planName.trim();
        const planId = plans.length === 0? 1 : plans[plans.length -1].id + 1; 

        const newObject: iPlan = {
            id: planId,
            name: treatedName,
            tasks: []
        };
        if(treatedName.length !== 0){
            setPlans([...plans, newObject]);
            setNewPlanModal(false);
        }
        console.log(plans);
    }

    return(
        <div className="modalBG">
            <div className="animate__animated animate__fadeInUp modal">
                <div className="container">
                    <header>
                        <h2>Criar Novo Plano</h2>
                        <button onClick={()=>setNewPlanModal(false)} className="btn-def">X</button>
                    </header>
                    <form>
                        <input onChange={(e)=> setPlanName(e.target.value)} type="text" placeholder="nome do plano..."/>
                        <button onClick={setNewPlan} className="submit-def-btn">awhaw</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPlanModal;
