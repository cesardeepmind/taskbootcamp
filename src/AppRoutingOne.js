import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about-faqs/AboutPage';

import './App.css';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';



function AppRoutingOne() {

  let logged = false;

  const taskList = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
    },
  ];

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged);
  }, [])
  

  return (
    <Router>

      <div>
        <aside>
          <Link to='/' >Home |</Link>
          <Link to='/about' > About |</Link>
          <Link to='/faqs' > FAQs |</Link>
          <Link to='/task/1' > Task 1 |</Link>
          <Link to='/task/2' > Task 2 |</Link>
          <Link to='/404' > Not Found |</Link>
          <Link to='/login' > Login |</Link>
          
        </aside>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/online-state" component={StatePage} />
            <Route exact path="/login" component={LoginPage}>
              {
                logged ?
                  () => {
                    alert('You are already logged in');
                    return (<Redirect to='/' />)
                  }
                :
                  () => {
                    return (<LoginPage />)
                  }
              }
            </Route>
            <Route path="/(about|faqs)" component={AboutPage} />
            <Route path="/profile" component={ProfilePage}>
              {
                logged ? <ProfilePage />
                : 
                () => {
                  alert('You need to be logged in to see this page');
                  return (<Redirect to='/login' />)
                }
              }
            </Route>
            <Route path="/tasks" component={TasksPage} />
            <Route
              exact
              path="/task/:id"
              render={
                ({ match }) => (<TasksDetailPage task={taskList[match.params.id-1]} />)
              }
            ></Route>

            {/* 404 */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>


      
    </Router>
  );
}

export default AppRoutingOne;
