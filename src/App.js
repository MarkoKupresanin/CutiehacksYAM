import './App.css';
import Navbar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to YAM Blog';

  return (
    <Router>
    <div className="App">
      <Switch>
        <Navbar />
          <Route exact path="/">
            <div className="content">
              <h1>{ title }</h1>
            </div>
          </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
