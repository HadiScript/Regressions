import React, { useState } from "react";
import ExamScorePrediction from "./components/ExamScrorePrediction";
import ModelSelection from "./components/ModelSelection";
import "./App.css";
import MrExamScorePrediction from "./components/MrExamScorePrediction";
import MrSalaryPrediction from "./components/MrSalaryPrediction";

const modelMap = {
  1: ExamScorePrediction,
  2: MrExamScorePrediction,
  3: MrSalaryPrediction,
};

const App = () => {
  const [activeModelId, setActiveModelId] = useState(null);

  const ActiveModelComponent = modelMap[activeModelId];

  return (
    <div className="App">
      <ModelSelection
        activeId={activeModelId}
        onChange={(modelId) => {
          if (modelId === activeModelId) {
            setActiveModelId(null);
          } else {
            setActiveModelId(modelId);
          }
        }}
      />

      {activeModelId && ActiveModelComponent && (
        <>
          <ActiveModelComponent />
        </>
      )}
      {/* <ExamScorePrediction /> */}
      {/* <MrExamScorePrediction /> */}
    </div>
  );
};

export default App;
