import { createContext, useState } from "react"
import { iPlan, iTask } from "../interfaces/interfaces";


interface iTasksProviderProps{
    children: React.ReactNode
}

interface iTasksExports{
    setNewPlanModal: React.Dispatch<React.SetStateAction<boolean>>;
    newPlanModal: boolean;
    setPlans: React.Dispatch<React.SetStateAction<iPlan[]>>;
    plans: iPlan[];
}

export const TasksContext = createContext({} as iTasksExports);

const TasksProvider = ({children}: iTasksProviderProps)=>{
    const [ newPlanModal, setNewPlanModal ] = useState<boolean>(false);
    const [ plans, setPlans ] = useState<iPlan[]>([]);

    return(
        <TasksContext.Provider value={{setNewPlanModal, newPlanModal, plans , setPlans}}>
            {children}
        </TasksContext.Provider>
    )

}

export default TasksProvider;