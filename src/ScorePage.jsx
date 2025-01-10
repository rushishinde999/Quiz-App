import React from "react";

function ScorePage({ score, resetQuiz }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
      <p className="text-xl">Your Score: {score} / 5</p>
      <button
        onClick={resetQuiz}
        className="mt-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ScorePage;
