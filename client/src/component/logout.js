import { GoogleLogout } from "react-google-login";

const client_id = '466314913207-lkq6cdq260oin55nlnet3o5bnun6mg2r.apps.googleusercontent.com';

function Logout(){

    const onSuccess =(res)=> {
        console.log('Logout successfull')
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
            clientId={client_id}
            buttonText="SignOut"
            onLogoutSuccess={onSuccess} 
            />
        </div>
    )
}

export default Logout;