import React from 'react';

export function Login() {
  return (
    <main>
        <div className="container text-center">
            <div className="row align-items-center">
                <h2>Please login or create an account</h2>
            </div>
            <div className="row align-items-center">
                <form method="get" action="language.html">
                    <div>
                        <label for="Username">User: </label>
                        <input type="text" id="Username" placeholder="Username" />
                    </div>
                    <div>
                        <label for="Password">Password: </label>
                        <input type="password" id="Password" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-secondary">Register</button>
                </form>
            </div>
        </div>
        <br />
        <br />

    </main>
  );
}