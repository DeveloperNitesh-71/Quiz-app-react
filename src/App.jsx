import React, {useState} from "react";
import { questions } from "./questions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextButtonClick = (e) => {
    if(currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log(currentQuestionIndex);
    }else{
      e.target.innerText = "submit";
    }
  };

  const handlePreviousButtonClick = () => {
    if(currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const onOptionClick = (option) => {
    if(option.target.innerText === questions[currentQuestionIndex].correctAnswer) {
      option.target.style.backgroundColor = "#05df72";
    } else {
      option.target.style.backgroundColor = "#fb2c36";
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold">Quiz App</h1>
      <div className="h-max w-150 border border-gray-400 rounded flex flex-col gap-4 items-start p-4 justify-between">
        <p className="text-start mt-4 w-full items-center text-xl font-medium">
          {questions[currentQuestionIndex].id}. {questions[currentQuestionIndex].question}
        </p>
        <ul className="flex flex-col gap-4 w-full">
          <li className="text-start w-full font-medium p-2 border border-gray-400 hover:bg-gray-100 cursor-pointer" onClick={(e) => onOptionClick(e)}>
            {questions[currentQuestionIndex].options[0]}
          </li>
          <li className="text-start w-full font-medium p-2 border border-gray-400 hover:bg-gray-100 cursor-pointer" onClick={(e) => onOptionClick(e)}>
            {questions[currentQuestionIndex].options[1]}
          </li>
          <li className="text-start w-full font-medium p-2 border border-gray-400 hover:bg-gray-100 cursor-pointer" onClick={(e) => onOptionClick(e)}>
            {questions[currentQuestionIndex].options[2]}
          </li>
          <li className="text-start w-full font-medium p-2 border border-gray-400 hover:bg-gray-100 cursor-pointer" onClick={(e) => onOptionClick(e)}>
            {questions[currentQuestionIndex].options[3]}
          </li>
        </ul>
        <div className="w-full flex justify-between">
          <button className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-4 border border-blue-400 rounded" onClick={() => handlePreviousButtonClick()}>
            ← Previous
          </button>
          <button className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-4 border border-blue-400 rounded" onClick={(e) => handleNextButtonClick(e)}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
