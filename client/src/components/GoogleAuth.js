import React, { useState, useEffect } from "react";

function GoogleAuth() {

    const [condition, setCondition] = useState(null);

    function GoogleApi() {
        window.gapi.load("client:auth2", function() { 
            window.gapi.client.init({
                clientId: "396613227648-p7e00fpsfj0fcqbqd0jo703am2pg8cmv.apps.googleusercontent.com",
                scope: "email"
            }).then(function() { 
                const auth = window.gapi.auth2.getAuthInstance();
                setCondition(auth.isSignedIn.get());
                auth.isSignedIn.listen(function() { setCondition(auth.isSignedIn.get()) });
             });
         });
    }

    useEffect(function() {
        GoogleApi()
    }, []);

     function onSignIn() {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signIn();
     }

     function onSignOut() {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.signOut();
     }
     

    function Title() { 
        if(condition === null) {
            return null;
        } else if(condition) {
            return <div>
                <button onClick={onSignOut} className="btn btn-primary">
                <i className="fab fa-google"></i>
                Sign Out
                </button>
            </div>;
        } else {
            return <div>
            <button onClick={onSignIn} className="btn btn-primary">
            <i className="fab fa-google"></i>
            Sign In
            </button>
        </div>;
        }
     }


    return <div>
        <Title />
    </div>;
}

export default GoogleAuth;