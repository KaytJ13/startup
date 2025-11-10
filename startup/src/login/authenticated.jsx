import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
  const navigate = useNavigate();
  // const [userName, setUserName] = React.useState(props.userName);

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
      body: JSON.stringify({ email: localStorage.getItem('userName') }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        localStorage.clear();
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>Welcome, {props.userName}!</div>
      <Button variant='primary' onClick={() => navigate('/language')}>
        Select Language
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}