import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoginPortal from './pages/LoginPortal';
import Dashboard from './pages/Dashboard';
import JournalView from './pages/JournalView';
import Registration from './pages/Registration';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="App" data-testid="App">
        <Navbar />
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
            <Registration />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
