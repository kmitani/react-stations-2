import * as React from 'react'
import './App.css';
import ApiFetch from './components/ApiFetch.js'
// import ThreadNew from './components/ThreadNew.js'


function App() {

  return (
    <div>
      <h1>新着スレッド</h1>
      <ApiFetch />
      {/* <ThreadNew /> */}
    </div>
  );
}

export default App;
