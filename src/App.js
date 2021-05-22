import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoginPortal from './pages/LoginPortal';
import Dashboard from './pages/Dashboard';
import JournalView from './pages/JournalView';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Page from './components/Page';
import './App.scss';
import ResetPassword from './pages/ResetPassword';
import ChangeEmail from './pages/ChangeEmail';
import ChangePassword from './pages/ChangePassword';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div data-testid="App" className="app">
        <Navbar />
        <Page>
          <Switch>
            <Route exact path="/profile/email">
              <ChangeEmail />
            </Route>
            <Route exact path="/profile/password">
              <ChangePassword />
            </Route>
            <Route path="/journal/:id">
              <JournalView />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/reset-password">
              <ResetPassword />
            </Route>
            <Route exact path="/">
              <LoginPortal />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Page>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
