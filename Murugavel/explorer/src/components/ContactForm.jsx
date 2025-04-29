import DropDown from "./DropDown";
import Button from "./Button";
import '../assets/styles/contact-form.css';
import { useState } from "react";

const ContactForm = ({ placeData }) => {
    const [source, setSource] = useState('');
    const [dest, setDest] = useState('');
    return (
        <div className="contact-section-wrapper">
            <div className="form-container">
                <h2 className="contact-form-header">Contact Us</h2>
                <p className="contact-form-text">Our Sales Team will reach out to you ASAP!</p>
                <form className="contact-form">
                    <label htmlFor="name" className="label-text">Name</label>
                    <input type="text" id="name" />
                    <DropDown placeData={placeData} setValue={setSource} labelText={'Your Home Town'} inputID={'source'} />
                    <DropDown placeData={placeData} setValue={setDest} selectedPlace={source} labelText={'Where would you like to go?'} inputID={'destination'} />
                    <label htmlFor="contact-number" className="label-text">Contact Number</label>
                    <input type="number" id="contact-number" />
                    <Button>SUBMIT INTEREST</Button>
                </ form>
            </div>
        </div>
    )
}

export default ContactForm;