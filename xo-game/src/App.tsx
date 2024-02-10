import React from 'react';
import AddBoard from './components/AddBoard';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <div className="game-board" style={{ marginTop: "300px" }}>
        <AddBoard />
      </div>
    </div>
  );
}

export default App;
