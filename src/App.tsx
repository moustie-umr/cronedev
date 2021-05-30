import React from 'react';
import Router from './pages';
import Header from './components/Header';
import GlobalStyle from './shared/GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
