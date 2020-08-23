import React from 'react';
import './App.scss';
import Header from './components/header/index'
import Headline from './components/headline/index'

import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='who is ahead in US 2020 elections?'/>
        </section>
      </div>
    </Provider>
  );
}

export default App;
