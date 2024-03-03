import React,{useContext} from "react";
import { QuizContext } from "../Helper/context";
import { Question } from "../Helper/Question";

function EndScreen(){
    const {score,setScore,setGameState} = useContext(QuizContext);
    const restartQuiz = ()=>{
        setScore(0);
        setGameState("Menu")
    }
    return(
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h2>{score}/{Question.length}</h2>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
        
        
    )
}

export default EndScreen;