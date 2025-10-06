import React from 'react';

export function Language() {
  return (
    <main>
        {/* <!-- Language selection form --> */}
        <div className="container text-center">
            <form action="level.html">
                <div className="row align-items-center">
                    <legend>Language</legend>
                </div>
                
                <div className="col align-items-center">
                    <input type="radio" className="btn-check" autocomplete="off" id="English" name="varRadio" value="English" />
                    <label for="English" className="btn btn-outline-primary">English</label>
                    
                    <input type="radio" className="btn-check" autocomplete="off" id="Español" name="varRadio" value="Español" />
                    <label for="Español" className="btn btn-outline-danger">Español</label>
                    
                    <input type="radio" className="btn-check" autocomplete="off" id="Deutsch" name="varRadio" value="Deutsch" />
                    <label for="Deutsch" className="btn btn-outline-success">Deutsch</label>

                    <button type="submit" className="btn btn-secondary">Select</button>
                </div>
            </form>
        </div>
    </main>
  );
}