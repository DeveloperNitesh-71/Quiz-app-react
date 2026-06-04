import React, { useRef, useState } from "react";
import { questions } from "./questions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [marks, setMarks] = useState(0)

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_arr = [option1, option2, option3, option4];

  const handleNextButtonClick = (e) => {
    option_arr.forEach((options) => {
      options.current.classList.remove("bg-red-300");
      options.current.classList.remove("bg-green-300");
      options.current.classList.remove("border-red-600");
      options.current.classList.remove("border-green-600");
    });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      e.target.innerText = "submit";
    }
    setClicked(false);
    
  };

  const onOptionClick = (option) => {
    if (clicked === false) {
      if (
        option.target.innerText ===
        questions[currentQuestionIndex].correctAnswer
      ) {
        setMarks((prev) => prev + 1)
        option.target.classList.add("bg-green-300");
        option.target.classList.add("border-green-600");
        option_arr.forEach((options) => {
          if (
            options.current.innerText !==
            questions[currentQuestionIndex].correctAnswer
          ) {
            options.current.classList.add("bg-red-300");
            options.current.classList.add("border-red-600");
          }
        });
        setClicked(true);
      } else {
        option.target.classList.add("bg-red-300");
        option.target.classList.add("border-red-600");
        setClicked(true);
        option_arr.forEach((options) => {
          if (
            options.current.innerText ===
            questions[currentQuestionIndex].correctAnswer
          ) {
            options.current.classList.add("bg-green-300");
            options.current.classList.add("border-green-600");
          }
        });
      }
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold">Quiz App</h1>
      <div className="h-max w-150 border border-gray-400 rounded flex flex-col gap-4 items-start p-4 justify-between">
        <p className="text-start mt-4 w-full items-center text-xl font-medium">
          {questions[currentQuestionIndex].id}.{" "}
          {questions[currentQuestionIndex].question}
        </p>
        <ul className="flex flex-col gap-4 w-full">
          <li
            ref={option1}
            className="text-start w-full font-medium p-2 border border-gray-400  cursor-pointer"
            onClick={(e) => onOptionClick(e)}
          >
            {questions[currentQuestionIndex].options[0]}
          </li>
          <li
            ref={option2}
            className="text-start w-full font-medium p-2 border border-gray-400  cursor-pointer"
            onClick={(e) => onOptionClick(e)}
          >
            {questions[currentQuestionIndex].options[1]}
          </li>
          <li
            ref={option3}
            className="text-start w-full font-medium p-2 border border-gray-400  cursor-pointer"
            onClick={(e) => onOptionClick(e)}
          >
            {questions[currentQuestionIndex].options[2]}
          </li>
          <li
            ref={option4}
            className="text-start w-full font-medium p-2 border border-gray-400 cursor-pointer"
            onClick={(e) => onOptionClick(e)}
          >
            {questions[currentQuestionIndex].options[3]}
          </li>
        </ul>
        <div className="w-full flex justify-center">
          <button
            className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-4 border border-blue-400 rounded"
            onClick={(e) => handleNextButtonClick(e)}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
