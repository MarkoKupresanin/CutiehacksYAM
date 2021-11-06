import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YAM Cutiehack!!!!!!!!!!!!!!!</h1>
      </header>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="753295328315-3sjkf7fpjcfj198jeq9v2ceof582hvrq.apps.googleusercontent.com"></meta>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
}

export default App;
