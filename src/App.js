import Header from "./Header";
import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <Header userName={userName} setUserName={setUserName}/>
    </div>
  );
}

export default App;
