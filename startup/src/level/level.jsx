import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Level(props) {
    const navigate = useNavigate();
    const [level, setLevel] = React.useState(props.level);
    
    async function pickLevel() {
        localStorage.setItem('level', level);
        props.onLevelChange(level);
        navigate('/space');
    }

  return (
    <main>
        {/* <!-- Level/Space selection --> */}
        <div className="container text-center">
            <form action="space.html">
                <div className="row align-items-center">
                    <legend>Ability Level</legend>
                </div>
                
                <div className="col align-items-center">
                    <input type="radio" className="btn-check" id="Beginner" name="varRadio" value="Beginner" autocomplete="off" onChange={(e) => setLevel(e.target.value)}/>
                    <label for="Beginner" className="btn btn-outline-secondary">Beginner</label>
                    
                    <input type="radio" className="btn-check" id="Intermediate" name="varRadio" value="Intermediate" autocomplete="off" onChange={(e) => setLevel(e.target.value)}/>
                    <label for="Intermediate" className="btn btn-outline-primary">Intermediate</label>
                    
                    <input type="radio" className="btn-check" id="Advanced" name="varRadio" value="Advanced" autocomplete="off" onChange={(e) => setLevel(e.target.value)}/>
                    <label for="Advanced" className="btn btn-outline-success">Advanced</label>
                    
                    <input type="radio" className="btn-check" id="Native" name="varRadio" value="Native" autocomplete="off" onChange={(e) => setLevel(e.target.value)}/>
                    <label for="Native" className="btn btn-outline-danger">Native Speaker</label>

                    <Button variant='secondary' onClick={pickLevel}>Select</Button>
                </div>
            </form>
        </div>
    </main>
  );
}