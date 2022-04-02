import logo from './logo.svg';
import './App.css';
import LoginButton from './component/login'
import LogoutButton from './component/logout'
import { useEffect } from 'react';
import {gapi} from 'gapi-script'

const client_id = '466314913207-lkq6cdq260oin55nlnet3o5bnun6mg2r.apps.googleusercontent.com'

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        client_id:client_id,
        scope:""
      })
    }

    gapi.load('client:auth2', start)
  })

  return (
    <div className="App">
     <LoginButton/>
     <LogoutButton/>
    </div>
  );
}

export default App;
