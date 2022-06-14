import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {
  const [questionData, setQuestion] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);
  // console.log(questionData);
  function functDel(delQuest) {
    // console.log(delQuest);
    const updateDel = questionData.filter((qst) => qst.id !== delQuest.id);
    setQuestion(updateDel);
  }
  function funcUpdate(updQuest) {
    const update = questionData.map((qst) => {
      if (qst.id === updQuest.id) {
        return updQuest;
      } else {
        return qst;
      }
    });
    setQuestion(update);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* display QuestionItem components here after fetching */}
      <ul>
        {questionData.map((ques, idx) => {
          return <QuestionItem key={idx} question={ques} onUpdate={funcUpdate} onDelete={functDel} />;
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
