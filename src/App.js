import { useState } from "react";
import "./App.css";
import StudentsTable from "./StudentsTable";

function App() {
  const [name, setname] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [date, setdate] = useState("");
  const [number, setnumber] = useState("");
  const [totaldata, settotaldata] = useState("");

  function submit() {
    var subjects = JSON.parse(localStorage.getItem("subjects")) || [];
    var subject = {
      name: name,
      fatherName: fatherName,
      date: date,
      number: number,
    };
    subjects.push(subject);
    localStorage.setItem("subjects", JSON.stringify(subjects));
    let course = JSON.parse(localStorage.getItem("subjects"));
    settotaldata(course);
  }
  return (
    <div>
      <center>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="enter fatherName"
          value={fatherName}
          onChange={(e) => {
            setfatherName(e.target.value);
          }}
        />
        <input
          type="date"
          placeholder="enter date"
          value={date}
          onChange={(e) => {
            setdate(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="enter number"
          value={number}
          onChange={(e) => {
            setnumber(e.target.value);
          }}
        />
        <button onClick={submit}>submit</button>
      </center>
      <StudentsTable data={totaldata} />
    </div>
  );
}

export default App;
