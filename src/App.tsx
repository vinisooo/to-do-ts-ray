import './App.css';
import "./GlobalStyles.css"
import "./styles/modals.css"
import Header from './components/Header';
import NewPlanModal from './components/NewPlanModal';
import "./styles/buttons.css";
import "animate.css";

import { useContext } from 'react';
import { TasksContext } from './context/TasksContext';

function App() {
  const {newPlanModal} = useContext(TasksContext)

  return (
    <div className="App">
      <main>
        <Header></Header>
      </main>
      {
        newPlanModal && <NewPlanModal/>
      }
    </div>
  );
}

export default App;
