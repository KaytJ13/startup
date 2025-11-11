import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { AuthState } from './login/authState';
import { Level } from './level/level';
import { Language } from './language/language';
import { Space } from './space/space';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    const [language, setLanguage] = React.useState(localStorage.getItem('language') || '');
    const [level, setLevel] = React.useState(localStorage.getItem('level') || '');

  return (
    <BrowserRouter>
        <div className="body">
    
            <header className="sticky-top">

                    <nav className="navbar navbar-expand-lg bg-secondary">
                        <a className="navbar-brand" href="https://getbootstrap.com/"></a>
                            <h1>
                                <img src="Behalten Logo.png" alt="Behalten Logo" width="300"></img>
                            </h1>

                        {/* Navigation links and such */}
                        <menu className="container-fluid">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="">
                                        Login
                                    </NavLink>
                                </li>
                                {authState === AuthState.Authenticated && (
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="language">
                                            Language Selection
                                        </NavLink>
                                    </li>
                                )}
                                {authState === AuthState.Authenticated && (
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="level">
                                            Ability Level Selection
                                        </NavLink>
                                    </li>
                                )}
                                {/* {authState === AuthState.Authenticated && (
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="space">
                                            Conversation Space
                                        </NavLink>
                                    </li>
                                )} */}
                            </ul>
                            
                        </menu>
                    </nav>
                
                    {/* Apparently this is a paragraph break? It just puts a line in */}
                    <hr />

                </header>

                <Routes>
                    <Route 
                        path='/' 
                        element={
                            <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                            />
                        }
                        exact 
                    />

                    <Route 
                        path='/language' 
                        element={
                            <Language 
                            language={language} 
                            onLanguageChange={(language) => setLanguage(language)}
                            />
                        } 
                        exact
                    />
                    <Route 
                        path='/level' 
                        element={
                            <Level 
                            level={level}
                            onLevelChange={(level) => setLevel(level)}
                            />
                        } 
                        exact
                    />
                    <Route 
                        path='/space' 
                        element={
                            <Space 
                            username={userName} 
                            language={language} 
                            level={level} 
                            />
                        } 
                        exact
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer>
                    <hr />
                    <span>Author: Kate Norcross</span>
                    {/* <br /> */}
                    <a href="https://github.com/KaytJ13/startup">GitHub</a>
                </footer>

        </div>
    </BrowserRouter>
  // Deleted from body bg-dark text-light
  );
}

function NotFound() {
  return <main className="container-fluid text-center">404: Return to sender. Address unknown.</main>;
}