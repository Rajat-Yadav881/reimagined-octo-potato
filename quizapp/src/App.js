import './App.css';
import React,{useState} from 'react';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import { QuizContext } from './Helper/context';
function App() {
  const [gameState, setGameState] = useState("Menu");
  const [score,setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "Menu" && <MainMenu />}
      {gameState === "Quiz" && <Quiz />}
      {gameState === "End" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
