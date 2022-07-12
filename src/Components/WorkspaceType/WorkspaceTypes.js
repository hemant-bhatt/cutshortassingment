import React from 'react'
import './workspacetype.css'
import { Link } from "react-router-dom";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import types from './type.png';
import { useState } from 'react';



function WorkspaceTypes() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };



    return (
        <div className='typesparent'>
            <div className='typeschild'>
                <img src={types} className="types" alt=''></img>
                <label className='welcomeText'>How are you planning to use Eden?</label>
                <label className='descriptionText'>We'll streamline your setup experience accordingly.</label>
                <div className='categories'>
                    <div className='tilesOuter'>
                        <div className='tiles' style={{
                            borderStyle: isActive ? 'solid' : 'hidden',
                        }} onClick={handleClick}>
                            <img src={icon1} className="icon" alt=''></img>
                            <br />
                            <label className='title'>For Myself</label>
                            <br />
                            <br />
                            <label className='description'>Write better. Think<br />more clearly. Stay<br />organized.</label>
                        </div>
                        <div className='tiles' style={{
                            borderStyle: isActive ? 'hidden' : 'solid',
                        }} onClick={handleClick}>
                            <img src={icon2} className="icon" alt=''></img>
                            <br />
                            <label className='title'>With my team</label>
                            <br />
                            <br />
                            <label className='description'>Wikis, docs, tasks &<br />projects, all in one<br />place.</label>
                        </div>
                    </div>
                    <Link to="/result" style={{ textDecoration: "none" }}><button className='typesbutton'>Create Workspace</button></Link>
                </div>
            </div>
        </div>
    );
}
export default WorkspaceTypes;