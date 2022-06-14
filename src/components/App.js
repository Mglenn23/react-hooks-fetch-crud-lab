import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [newData, setNewData] = useState([]);

  function handleAdd(add) {
    console.log(add);
    setNewData(newData);
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuest={handleAdd} /> : <QuestionList />}
    </main>
  );
}

export default App;
