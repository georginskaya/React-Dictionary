import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className='App'>
      <div className='container mainApp'>
        <main>
          <Dictionary defaultKeyword='serenity' />
        </main>
      </div>
    </div>
  );
}

export default App;
