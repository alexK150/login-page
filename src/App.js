import React, {useState, useEffect} from 'react';
import fireBase from "./firebase";
import Login from "./components/Login";
import Page from "./components/Page";

import './App.css';

function App() {
  // set state for login in
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(false)

  // states for errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('');
    setPassword('')
  }

  const handleLogin = () => {
    clearErrors();
    fireBase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignUp = () => {
    clearErrors();
    fireBase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message)
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout = () => {
    fireBase.auth().signOut();
  }

  // if user exists
  const authListener = () => {
    fireBase.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      {user ? (
        <div>
          <Page handleLogout={handleLogout}/>
        </div>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
