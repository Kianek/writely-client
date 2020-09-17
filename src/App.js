/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import JournalView from './pages/JournalView';

const theme = {
  colors: {
    primary: '#ffe2f8',
    lightGray: '#d0cfcf',
    darkGray: '#565254',
    success: '#4adb26',
    info: '#0066ff',
    danger: '#ff0000',
    white: '#fff',
    black: '#000',
    shadow: 'rgba(0,0,0,0.2)',
    boxShadow: {
      boxShadow: '0 0 4px 3px rgba(0, 0, 0, 0.2)',
    },
  },
  container: {
    block: {
      display: 'block',
    },
  },
  flex: {
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
};

const appStyles = (theme) => css`
  ${theme.flex.column}
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div css={appStyles} id="app" data-testid="appComponent">
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
    </ThemeProvider>
  );
}

export default App;
