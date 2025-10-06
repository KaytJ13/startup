import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Level } from './level/level';
import { Language } from './language/language';
import { Space } from './space/space';

export default function App() {
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
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="language">
                                        Language Selection
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="level">
                                        Ability Level Selection
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="space">
                                        Conversation Space
                                    </NavLink>
                                </li>
                            </ul>
                            
                        </menu>
                    </nav>
                
                    {/* Apparently this is a paragraph break? It just puts a line in */}
                    <hr />

                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/language' element={<Language />} />
                    <Route path='/level' element={<Level />} />
                    <Route path='/space' element={<Space />} />
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