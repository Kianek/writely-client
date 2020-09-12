import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import JournalView from './pages/JournalView';

function App() {
  return (
    <div id="app" data-testid="appComponent">
      <Navbar />
      <Page>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/journal/:id" component={JournalView} />
          <Route path="/settings" component={Settings} />
          <Route path="/settings/change-password" component={ChangePassword} />
        </Switch>
      </Page>
      <Footer />
    </div>
  );
}

export default App;
