import React from 'react'
import './workspacedetail.css'
import { Link } from "react-router-dom";
import details from './details.png'

function WorkspaceDetails() {
    return (
        <div className='detailsparent'>
            <div className='detailschild'>
                <img src={details} className="details" alt=''></img>
                <label className='welcomeText'>Let's set up a home for all your work</label>
                <label className='descriptionText'>You can always create another workspace later</label>
                <br />
                <div className='detailsinputComponent'>
                    <label className='detailslabelField'>Workspace Name</label>
                    <input type='text' className='detailsinputField' placeholder="Eden"></input>
                    <label className='detailslabelField'>Workspace URL</label>
                    <input type='text' className='detailsinputField' placeholder="www.eden.com/"></input>
                    <Link to="/types" style={{ textDecoration: "none" }}><button className='detailsbutton'>Create Workspace</button></Link>
                </div>
            </div>
        </div>
    );
}
export default WorkspaceDetails;