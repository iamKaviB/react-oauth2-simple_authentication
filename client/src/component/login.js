import {GoogleLogin} from 'react-google-login'

const client_id = '466314913207-lkq6cdq260oin55nlnet3o5bnun6mg2r.apps.googleusercontent.com'

function Login(){

    const onSuccess =(res)=> {
        console.log('Login Success! current user :', res.profileObj)
    }
    
    const onFailure =(res)=> {
        console.log('Login Failes!  :', res)
    }

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={client_id}
                buttonText="Sign In"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
    

}

export default Login;