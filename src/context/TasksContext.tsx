import { createContext, useState } from "react"
import { iPlan, iTask } from "../interfaces/interfaces";


interface iTasksProviderProps{
    children: React.ReactNode
}

interface iTasksExports{
    setNewPlanModal: React.Dispatch<React.SetStateAction<boolean>>;
    newPlanModal: boolean;
    newTaskModal: boolean;
    setNewTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    currentPlan: number;
    setCurrentPlan: React.Dispatch<React.SetStateAction<number>>;
    setPlans: React.Dispatch<React.SetStateAction<iPlan[]>>;
    plans: iPlan[];
}

export const TasksContext = createContext({} as iTasksExports);

const TasksProvider = ({children}: iTasksProviderProps)=>{
    const [ newPlanModal, setNewPlanModal ] = useState<boolean>(false);
    const [ newTaskModal, setNewTaskModal ] = useState<boolean>(false);
    const [ currentPlan, setCurrentPlan ] = useState<number>(0);
    const [ plans, setPlans ] = useState<iPlan[]>([]);

    return(
        <TasksContext.Provider value={{setNewPlanModal, newPlanModal, plans , setPlans, newTaskModal, setNewTaskModal, currentPlan, setCurrentPlan}}>
            {children}
        </TasksContext.Provider>
    )

}

export default TasksProvider;