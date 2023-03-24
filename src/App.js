import * as React from 'react'
import './App.css';
import Top from './components/Top.js'
import CreateThread from './components/CreateThread.js'
import ShowComment from './components/ShowComment.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ThreadNew from './components/ThreadNew.js'


function App() {
  return (
    <BrowserRouter>
      <h1>掲示板アプリ</h1>
      <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/create-thread" component={CreateThread} />
      <Route path="/:id" component={ShowComment} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
function NotFound() {
  return("ページがありません")
}

export default App;
