import React from 'react';

import Button from 'react-bootstrap/Button';
// import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div className="container text-center">
            <div className="row align-items-center">
                <h2>Please login or create an account</h2>
            </div>
            <div className="row align-items-center">
                <form method="get" action="language.html">
                    <div>
                        <label for="Username">User: </label>
                        <input type="text" id="Username" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
                    </div>
                    <div>
                        <label for="Password">Password: </label>
                        <input type="password" id="Password" placeholder="password" />
                    </div>
                    <Button variant='primary' onClick={() => loginUser()} >
                        {/* disabled={!userName || !password} */}
                        Login
                    </Button>
                    <Button variant='secondary' onClick={() => createUser()} >
                        {/* disabled={!userName || !password} */}
                        Register
                    </Button>
                </form>
            </div>
        </div>
        <br />
        {/* <MessageDialog message={displayError} onHide={() => setDisplayError(null)} /> */}
        <br />
    </>
  );
}