import React, { useState } from "react";
import Joke from "./joke";
import Stories from "./stories";
import Tasks from "./tasks";


function App() {
  const [userQuery, setUserQuery] = useState("");
  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };
  return (
    <div className="App">
      <header> Hello PSK </header>
      <div className="form">
        <input
          type="text"
          onChange={updateUserQuery}
          value={userQuery}
          onKeyPress={handleKeyPress}
        />
        <button type="button" onClick={searchQuery}>
          Search
        </button>
      </div>
      <hr/>
      <Joke />
      <hr/>
      <Tasks />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
