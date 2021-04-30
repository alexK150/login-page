import React from 'react';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError} = props;

  return (
    <section className={'card all-center'}>
      <div className="login-container">
        <label>Username</label>
        <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
        <p>{emailError}</p>
        <label>Password</label>
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
        <p>{passwordError}</p>
        <div>
          {hasAccount ? (
            <>
              <button className={'btn btn-success'} onClick={handleLogin}>Sign in</button>
              <p className={'stripe'}>Don't have an account ? <span className={'btn btn-light'} onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
            </>
          ) : (
            <>
              <button className={'btn btn-success'} onClick={handleSignUp}>Sign up</button>
              <p className={'stripe'}>Have an account ? <span className={'btn btn-light'} onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Login