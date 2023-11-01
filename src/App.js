import { useEffect } from 'react';
import './App.css';

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        // Service Worker registration successful
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }

  const enableNotif=()=>{
    Notification.requestPermission().then((permission) =>{
      if(permission === "granted"){
        navigator.serviceWorker.ready.then((sw)=>{
          sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 
            "BA-Nqq2lYA6oDxHWLf-He6WjjjwQp-A_k_pGwBHg2vx8S0Nu-bKI1zD-WUpnDywVmJ8KCMZvmVxfhBtHPTQwqbE"
          }).then((subscription) =>{
            console.log("Subscription: " + JSON.stringify(subscription));
          })
        })
      }
    })
  }

  useEffect(()=>{
    enableNotif();
  },[])
  
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
