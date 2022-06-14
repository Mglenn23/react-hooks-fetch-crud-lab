import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  // console.log(question);
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDeleteClick() {
    console.log(question.id);
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDelete(question));
  }
  function handleChangeSelect(e) {
    console.log(e.target.value);
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((upd) => onUpdate(upd));
    /* Required Headers:
    { "Content-Type": "application/json" }

    Body:
    {
      "correctIndex": integer
    }*/
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChangeSelect} defaultValue={correctIndex}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
