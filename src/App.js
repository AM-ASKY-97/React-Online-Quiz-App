import { useState, useContext } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainMenu from './Components/MainMenu/MainMenu';
import Quiz from './Components/Quiz/HtmlQuiz/Quiz';
import EndScreen from './Components/EndScreen/EndScreen';

import { QuizContext } from './Helpers/Contexts';
import CssQuiz from './Components/Quiz/CssQuiz/CssQuiz';
import PhpQuiz from './Components/Quiz/PhpQuiz/PhpQuiz';

function App() {

  const [gameStart, setGameStart] = useState('MainMenu');

  return (
    <div className="App">
      <Header />

      <QuizContext.Provider value={{gameStart, setGameStart}}>
        {gameStart === "MainMenu" && <MainMenu />}
        {gameStart === "Quiz" && <Quiz />}
        {gameStart === "CssQuiz" && <CssQuiz />}
        {gameStart === "PhpQuiz" && <PhpQuiz />}
        {gameStart === "EndScreen" && <EndScreen />}
      </QuizContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
