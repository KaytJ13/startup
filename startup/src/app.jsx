import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body">
    
            <header className="sticky-top">

                    <nav className="navbar navbar-expand-lg bg-secondary">
                        <a className="navbar-brand" href="https://getbootstrap.com/"></a>
                            <h1>
                                <img src="Behalten Logo.png" alt="Behalten Logo" width="300"></img>
                            </h1>

                        {/* Navigation links and such */}
                        <menu className="container-fluid">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="index.html">Login</a></li>
                                <li className="nav-item"><a className="nav-link" href="language.html">Language Selection</a></li>
                                <li className="nav-item"><a className="nav-link" href="level.html">Ability Level Selection</a></li>
                                <li className="nav-item"><a className="nav-link" href="space.html">Conversation Space</a></li>
                            </ul>
                            
                        </menu>
                    </nav>
                
                    {/* Apparently this is a paragraph break? It just puts a line in */}
                    <hr />

                </header>

                <main>App components go here</main>

                <footer>
            <hr />
            <span>Author: Kate Norcross</span>
            {/* <br /> */}
            <a href="https://github.com/KaytJ13/startup">GitHub</a>
        </footer>

    </div>;
  // Deleted from body bg-dark text-light
}