import { h } from 'preact';
import { Route, Router } from 'preact-router';
import { RecoilRoot } from "recoil";

import './style/index.scss';

import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';

// Code-splitting is automated for `routes` directory
import Home from './routes/Home';
import Profile from './routes/Profile';
import Search from './routes/Search';
import Notifications from './routes/Notifications';

const App = () => (
	<main id="app" className="d-flex">
    <RecoilRoot>
      <Sidebar />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/search/" component={Search} />
        <Route path="/notifications/" component={Notifications} />
      </Router>

      <MobileMenu />
    </RecoilRoot>
  </main>
);

export default App;
