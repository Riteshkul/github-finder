import './App.css';
import Navbar from './components/layout/Navbar';
import UserData from './components/users/UserData';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router ,Route,Routes as Switch } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

function App(props) {
  return (
    <GithubState>
      <AlertState>
    <Router>    
      <div className="App">
      <Navbar title='Github Finder' icon='fab fa-github'/>
      <div className='container'>
        <Alert />
        <Switch>
          <Route exact path='/' element={<>
            <Search > </Search>
              <UserData  />
          </>}>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/:username' element={<User />}/>  
        </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}

export default App;
