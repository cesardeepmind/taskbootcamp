import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import RegisterPage  from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';

import './App.css';

function AppRoutingFinal() {

 //TODO:change to value from sessionStorage (or something dinamic)
  const loggedIn = false;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        <Route exact path='/'>
          {
            loggedIn ?
            <Redirect from='/' to='/dashboard' />
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
          {/* Register Route */}
          <Route exact path='/register' component={RegisterPage} />
          {/* Login Route */}
        <Route exact path='/login' component={LoginPage} />
        {/* Dashboard Route */}
        <Route exact path='/dashboard'>
          {
            loggedIn ?
            <DashBoard />
            :
            <Redirect from='/' to='/login' />
          }
        </Route>
        {/* Task Route */}
        <Route exact path='/tasks'>
          {
            loggedIn ?
            <TasksPage />
            :
            <Redirect to='/login' />
          }
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
