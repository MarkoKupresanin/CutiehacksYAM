import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';
import Navbar from './NavBar';
import Footer from './Footer';


function App() {
  const title = 'Welcome to YAM Blog';

  return (
    <Router>
      <MobileView>
        <h2 style={{textAlign: "center"}}>The mobile version of this site is currently in development. We strongly advise viewing this page from a computer.</h2>
      </MobileView>
    
    <div className="App">
      <BrowserView>
        <Navbar />
        <div className="content">
          <h1>{ title }</h1>
        </div>
        <Footer />

        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="google-signin-client_id" content="753295328315-3sjkf7fpjcfj198jeq9v2ceof582hvrq.apps.googleusercontent.com"></meta>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
      
        <Route path="*">
          <NotFound />
        </Route>
      </BrowserView>
    </div>
  </Router>
  );
}

export default App;
