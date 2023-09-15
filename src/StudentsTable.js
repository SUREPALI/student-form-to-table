import React, { useEffect, useState } from "react";

function StudentsTable(props) {
  const [totaldata1, settotaldata1] = useState([]);

  useEffect(() => {
    settotaldata1(props.data);
  }, [props.data]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>fatherName</th>
            <th>date</th>
            <th>number</th>
          </tr>
          {totaldata1
            ? totaldata1.map((a) => {
                return (
                  <tr>
                    <td>{a.name}</td>
                    <td>{a.fatherName}</td>
                    <td>{a.date}</td>
                    <td>{a.number}</td>
                  </tr>
                );
              })
            : undefined}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsTable;
