import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Language(props) {
    const navigate = useNavigate();
    const [language, setLanguage] = React.useState(props.language);

    async function pickLanguage() {
        localStorage.setItem('language', language);
        props.onLanguageChange(language);
        navigate('/level');
    }

  return (
    <main>
        {/* <!-- Language selection form --> */}
        <div className="container text-center">
            <form action="level.html">
                <div className="row align-items-center">
                    <legend>Language</legend>
                </div>
                
                <div className="col align-items-center">
                    <input type="radio" className="btn-check" autocomplete="off" id="English" name="varRadio" value="English" onChange={(e) => setLanguage(e.target.value)} />
                    <label for="English" className="btn btn-outline-primary">English</label>
                    
                    <input type="radio" className="btn-check" autocomplete="off" id="Español" name="varRadio" value="Español" onChange={(e) => setLanguage(e.target.value)} />
                    <label for="Español" className="btn btn-outline-danger">Español</label>
                    
                    <input type="radio" className="btn-check" autocomplete="off" id="Deutsch" name="varRadio" value="Deutsch" onChange={(e) => setLanguage(e.target.value)} />
                    <label for="Deutsch" className="btn btn-outline-success">Deutsch</label>

                    <Button variant='secondary' onClick={pickLanguage}>Select</Button>

                    {/* <Button variant='secondary' onClick={pickLevel}>Select</Button> */}
                </div>
            </form>
        </div>
    </main>
  );
}