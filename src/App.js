import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoginPortal from './pages/LoginPortal';
import Dashboard from './pages/Dashboard';
import JournalView from './pages/JournalView';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Page from './components/Page';
import './App.scss';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Router>
      <div data-testid="App" className="app">
        <Navbar />
        <Page>
          <Switch>
            <Route exact path="/">
              <LoginPortal />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/journal/:id">
              <JournalView />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/reset-password">
              <ResetPassword />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Page>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
