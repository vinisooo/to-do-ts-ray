import { iTask } from "../../interfaces/interfaces";
import Styled from "./style.module.css";
import binIcon from "../../assets/bin-icon.svg";

interface iTaskProps{
    task: iTask
}

const Task = ({task}: iTaskProps) => {
    return(
        <li>
            <div className={Styled.leftTaskSide}>
                <input type="checkbox"/>
                <h4>{task.name}</h4>
            </div>
            <div className={Styled.rightTaskSide}>
                <span>{task.date}</span>
                <button className={Styled.deleteTaskBtn}>
                    <img src={binIcon} />
                </button>
            </div>
        </li>
    )

}

export default Task
