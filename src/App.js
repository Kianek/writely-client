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
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/journal/:id">
            <JournalView />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route exact path="/change-password" component={ChangePassword} />
        </Switch>
      </Page>
      <Footer />
    </div>
  );
}

export default App;
