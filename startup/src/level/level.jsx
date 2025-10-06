import React from 'react';

export function Level() {
  return (
    <main>
        {/* <!-- Level/Space selection --> */}
        <div className="container text-center">
            <form action="space.html">
                <div className="row align-items-center">
                    <legend>Ability Level</legend>
                </div>
                
                <div className="col align-items-center">
                    <input type="radio" className="btn-check" id="Beginner" name="varRadio" value="Beginner" autocomplete="off" />
                    <label for="Beginner" className="btn btn-outline-secondary">Beginner</label>
                    
                    <input type="radio" className="btn-check" id="Intermediate" name="varRadio" value="Intermediate" autocomplete="off" />
                    <label for="Intermediate" className="btn btn-outline-primary">Intermediate</label>
                    
                    <input type="radio" className="btn-check" id="Advanced" name="varRadio" value="Advanced" autocomplete="off" />
                    <label for="Advanced" className="btn btn-outline-success">Advanced</label>
                    
                    <input type="radio" className="btn-check" id="Native" name="varRadio" value="Native" autocomplete="off" />
                    <label for="Native" className="btn btn-outline-danger">Native Speaker</label>

                    <button type="submit" className="btn btn-secondary">Select</button>
                </div>
            </form>
        </div>
    </main>
  );
}