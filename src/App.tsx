import './App.css';
import "./GlobalStyles.css"
import "./styles/modals.css"
import Header from './components/Header';
import NewPlanModal from './components/NewPlanModal';
import Plan from './components/Plan';
import NewTaskModal from './components/NewTaskModal';
import "./styles/buttons.css";
import "animate.css";

import { useContext } from 'react';
import { TasksContext } from './context/TasksContext';

function App() {
  const {newPlanModal, plans, newTaskModal, currentPlan} = useContext(TasksContext)

  return (
    <div className="App">
      <main>
        <Header/>
        <section>
          {
            plans.map((plan)=>{
              return(
                <Plan plan={plan} key={plan.id}/>
              )
            })
          }
        </section>
      </main>
      {
        newPlanModal && <NewPlanModal/>
      }
      {
        newTaskModal && <NewTaskModal planId={currentPlan}/>
      }
    </div>
  );
}

export default App;
