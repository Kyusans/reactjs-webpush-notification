import './App.css';

function App() {
  navigator.serviceWorker.register("./../public/service-worker.js");
  return (
    <div className="App">

    </div>
  );
}

export default App;
