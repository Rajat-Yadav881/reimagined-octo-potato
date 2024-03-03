import React,{useState , useContext} from "react";
import { QuizContext } from "../Helper/context";
import { Question } from "../Helper/Question.js";

function Quiz(){

    const {score,setScore,setGameState} = useContext(QuizContext);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState("");

    const nextQuestion = ()=>{
        if(Question[currentQuestion].asnwer == optionChosen){
            setScore(score + 1);
        }
        alert(score);
        setCurrentQuestion(currentQuestion + 1);
    }
    const finishQuiz = ()=>{
        if(Question[currentQuestion].asnwer == optionChosen){
            setScore(score + 1);
        }
        setGameState("End");
    }
    return (
        <div className="Quiz">
     
            <h1>{Question[currentQuestion].ques}</h1>
            <div className="options">
                <button onClick={()=> setOptionChosen("A")}>{Question[currentQuestion].optionA}</button>
                <button onClick={()=> setOptionChosen("B")}>{Question[currentQuestion].optionB}</button>
                <button onClick={()=> setOptionChosen("C")}>{Question[currentQuestion].optionC}</button>
                <button onClick={()=> setOptionChosen("D")}>{Question[currentQuestion].optionD}</button>
            </div>
            {currentQuestion == Question.length-1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) : (<button onClick={nextQuestion}>Next Question</button>)}
            
        </div>
    )
}

export default Quiz;