import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './components/user';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Route path="/" exact component={User} />
      <Route path="/CreateUser" exact component={CreateUser} />
      <Route path="/EditUser" exact component={EditUser} />
      <Route path="/DeleteUser" exact component={DeleteUser} />
    </Router>
  );
}

export default App;
