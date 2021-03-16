import React, { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './utils/getUsers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home';
// import Reposts from './pages/Reposts';
import { User } from './pages/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((items) => {
      setUsers(items);
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar users={users} />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Route path="/reports" component={Reports} /> */}
          <Route path="/:id" component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
