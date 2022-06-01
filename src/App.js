import './assets/styles.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';
import Navbar from './components/Nav';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Schedule from './pages/Schedule';
import Info from './pages/Info';
import Help from "./pages/Help";
import Privacy from './pages/Privacy';
import TermUse from './pages/TermUse';
import Footer from "./components/footer/Footer";

import AppState from "./context/App/State";

import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <AppState>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/chat" component={Chat} />
        <PrivateRoute exact path="/resources" component={Resources} />
        <PrivateRoute exact path="/schedule" component={Schedule} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/info" component={Info} />
        <PrivateRoute exact path="/help" component={Help} />
        <PrivateRoute exact path="/privacy" component={Privacy} />
        <PrivateRoute exact path="/termuse" component={TermUse} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Footer />
        </AppState>
      </Switch>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
