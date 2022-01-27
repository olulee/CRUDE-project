import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Navbar from './components/landingpage/NavBar';
import LandingPage from './components/landingpage/LandingPage';
import EditUser from './components/EditUser/EditUser';

function App() {
  return (
    <div className='app_wrapper'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/create_user' component={AddUser} />
          <Route exact path='/edituser/:name' component={EditUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
