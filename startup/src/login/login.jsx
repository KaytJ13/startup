import React from 'react';

import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
        <div>
        {authState !== AuthState.Unknown}
        {authState === AuthState.Authenticated && (
            <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
            <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
                onAuthChange(loginUserName, AuthState.Authenticated);
            }}
            />
        )}
        </div>
    </main>
  );
}