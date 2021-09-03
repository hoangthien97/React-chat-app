import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './conponents/Login';
// import ChatRoom from './conponents/ChatRoom';

function App() {
  return <BrowserRouter>
    <Switch>
      <Route component={Login} path="/" />
      {/* <Route component={ChatRoom} path="/ChatRoom" /> */}
    </Switch>
  </BrowserRouter>;
}

export default App;
