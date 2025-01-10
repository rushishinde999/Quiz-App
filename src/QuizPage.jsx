import React, { useState } from "react";

const questions = [
  {
    question: "Which of the following is not a pillar of OOP?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Compilation"],
    answer: "Compilation",
  },
  {
    question: "What is the primary purpose of encapsulation in OOP?",
    options: [
      "To achieve code reusability",
      "To restrict direct access to data members",
      "To allow multiple methods with the same name",
      "To create parent-child relationships",
    ],
    answer: "To restrict direct access to data members",
  },

  {
    question: "What is the default port number for MySQL?",
    options: ["8080", "1521", "3306", "5432"],
    answer: "3306",
  },

  {
    question: "What is the role of the `commit()` method in JDBC?",
    options: [
      "It executes a query",
      "It rolls back a transaction",
      "It ends a transaction by saving changes",
      "It creates a new database connection",
    ],
    answer: "It ends a transaction by saving changes",
  },
  {
    question: "Which statement is true about the PRIMARY KEY in MySQL?",
    options: [
      "It allows duplicate values",
      "It can contain NULL values",
      "It uniquely identifies each record in a table",
      "It can only be applied to numeric columns",
    ],
    answer: "It uniquely identifies each record in a table",
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
