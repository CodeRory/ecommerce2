import React from 'react';
import './App.css';
import SearchAppBar from './components/header/header';
import SecondNav from './components/secondNav/secondNav';

function App() {
  return (
    <div className="App">
      <div className='allComponents'>
        <header className="App-header">
          <SearchAppBar />
        </header>
        <div>
          <SecondNav />
        </div>
      </div>
    </div>
  );
}

export default App;
