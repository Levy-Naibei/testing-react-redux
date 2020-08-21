import React from 'react';
import './App.scss';
import Header from './components/header/index'
import Headline from './components/headline/index'

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='who is ahead in US 2020 elections?'/>
      </section>
    </div>
  );
}

export default App;
