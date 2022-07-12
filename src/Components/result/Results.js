import React from 'react'
import './result.css'
import done from "./done.png";
import result from './result.png'

function WorkspaceDetails() {
    return (
        <div className='resultparent'>
            <div className='resultchild'>
                <img src={result} className='result' alt=''></img>
                <img className='done' src={done} alt=''></img>
                <label className='welcomeText'>Congratulations! Eren</label>
                <label className='descriptionText'>You have completed onboarding, you can start using Eden!</label>

                <button className='resultbutton'>Launch Eden</button>
            </div>
        </div>
    );
}
export default WorkspaceDetails;