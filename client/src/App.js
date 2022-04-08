import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import GameCreate from './components/GameCreate'
import GameDetail from './components/GameDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route path='/home' component= {Home}/>
        <Route path='/created' component={GameCreate}/>
        <Route path='/videogame/:id' component={GameDetail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
