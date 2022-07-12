import React from 'react'
import './homepage.css'
import { Link } from "react-router-dom";
import home from "./home.png";

function HomePage() {
    return (
        <div className='homepageparent'>
            <div className='homepagechild'>
                <img src={home} className='home' alt=''></img>
                <label className='welcomeText'>Welcome! First things first...</label>
                <label className='descriptionText'>You can always change them later</label>
                <br />
                <div className='homeinputComponent'>
                    <label className='homelabelField'>Full Name</label>
                    <input type='text' className='homeinputField' placeholder="Eden"></input>
                    <label className='homelabelField'>Display Name<span className='hintText'> (optional)</span></label>
                    <input type='text' className='homeinputField' placeholder="www.eden.com/"></input>
                    <Link to="/details" style={{ textDecoration: "none" }}><button className = 'homebutton'>Create Workspace</button></Link>
                </div>
            </div>
        </div>
    );
}
export default HomePage;