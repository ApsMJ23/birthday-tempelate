import './App.css';
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {Salvi} from './pages/Salvi'
import {Udeeta} from './pages/Udeeta'
import {Apurv} from './pages/Apurv'
import {Wilu} from './pages/Wilu'
import {Surprise} from './pages/Surprise'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/apurv'>
          <Apurv/>
        </Route>
        <Route path='/apurv/surprise'>
          <Surprise/>
        </Route>
        <Route path='/apurv/wilu'>
          <Wilu/>
        </Route>
        <Route path='/salvi'>
          <Salvi/>
        </Route>
        <Route path='/udeeta'>
          <Udeeta/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
