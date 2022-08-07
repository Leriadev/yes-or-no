import { Navigate } from "react-router-dom"
import '../../App.scss'
import Preloader from "../Preloader/Preloader"

const Answer = (props) => {
    if (!props.getAnswer) { return <Navigate to = "/" /> }
    if (!props.isSetSuccsess) {return <Preloader />}
    else return (
        <div className="answer">
            <div className="get-answer">
            <img src = {props.image} />
            <p className="get-answer__answer-text">{props.questionText}</p>
            <label>{props.answer}</label>
            </div>
            <div className="retry">
                <p>...or if you wanted a different answer, you can try</p> <button className="retry__btn" onClick = {props.toggleGetAnswer}>again</button>
            </div>
        </div>
    )
}

export default Answer