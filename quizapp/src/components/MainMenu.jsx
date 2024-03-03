import React,{useContext} from "react";
import { QuizContext } from "../Helper/context";

function MainMenu(){
    const {gameState,setGameState} = useContext(QuizContext);
    function handleClick(){
        setGameState("Quiz");
    }
    return (
        <div className='Menu'>
            <button onClick={handleClick}>Start Quiz</button>
        </div>
    )
}

export default MainMenu;