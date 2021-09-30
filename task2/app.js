import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className="App">
      <header>
        <img
          class="brand-name"
          src="data:image/jpeg;base64,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"
          alt="brand-name"
        ></img>
        <button onClick={loadUsers}> User's Details</button>
      </header>
      <ul>
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <li class="list" key={id}>
            <img class="profile" src={avatar} alt="profile"></img>
            <li class="list1">
              Name : {first_name} {last_name}
            </li>
            <li class="list1">Email ID : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;