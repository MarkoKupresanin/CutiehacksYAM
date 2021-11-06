import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
      </div>

      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="753295328315-3sjkf7fpjcfj198jeq9v2ceof582hvrq.apps.googleusercontent.com"></meta>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>

  );
}

export default App;
