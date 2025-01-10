import React, { useState } from "react";

const questions = [
  {
    question: "What's the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Homer", "Tolstoy", "Dickens"],
    answer: "Shakespeare",
  },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  {
    question: "What color is the sky?",
    options: ["Green", "Blue", "Red", "Yellow"],
    answer: "Blue",
  },
  {
    question: "What is the largest planet?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
];

function QuizPage({ handleScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [localScore, setLocalScore] = useState(0);

  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setLocalScore(localScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      handleScore(
        localScore +
          (selectedOption === questions[currentQuestion].answer ? 1 : 0)
      );
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">
        Question {currentQuestion + 1}: {questions[currentQuestion].question}
      </h2>
      <div className="space-y-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`py-2 px-4 w-full text-lg rounded-lg ${
              selectedOption === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700"
        disabled={!selectedOption}
      >
        {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
}

export default QuizPage;
