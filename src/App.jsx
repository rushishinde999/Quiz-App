import React, { useState } from "react";
import QuizPage from "./QuizPage";
import ScorePage from "./ScorePage";

function App() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleScore = (newScore) => {
    setScore(newScore);
    setShowScore(true);
  };

  const resetQuiz = () => {
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Quiz App</h1>
        {!showScore ? (
          <QuizPage handleScore={handleScore} />
        ) : (
          <ScorePage score={score} resetQuiz={resetQuiz} />
        )}
      </div>
    </div>
  );
}

export default App;
