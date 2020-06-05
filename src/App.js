import React from 'react';
import './App.css';
import SearchAppBar from './components/header/header';

function App() {
  return (
    <div className="App">
      <div className='allComponents'>
        <header className="App-header">
          <SearchAppBar />
        </header>
      </div>
    </div>
  );
}

export default App;
