import React from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: 'AIzaSyAU0mYKxIMw42dJV5Gyi1k7S5AheWtp0IQ',
  authDomain: 'portalgrapushnotification.firebaseapp.com'
});

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = { isSignedIn : false }
  }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess : function(){
        debugger;
        return false;
      }
    }
  }

  componentDidMount () {
    const classThis = this;
    firebase.auth().onAuthStateChanged(function(u){
      
      classThis.setState({ isSignedIn : !!u });
    });
  }



  render(){
    return (
<div className="App">
  {
  this.state.isSignedIn ? (<>
    <h1>IN</h1>
    <button onClick={() => firebase.auth().signOut() }>LOGOUT</button></>
  ) : (
    <StyledFirebaseAuth 
      uiConfig={this.uiConfig} 
      firebaseAuth={firebase.auth()}
    />
  )
  }
</div>
    );
  };
}

export default App;
