import React, { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './utils/getUsers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { Reports } from './pages/Reports';
import { User } from './pages/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((items) => {
      console.log('fetchRequested');
      setUsers(items);
      console.log('fetchDone');
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar users={users} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports}>
            <Reports users={users} />
          </Route>
          <Route path="/:id" component={User} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
