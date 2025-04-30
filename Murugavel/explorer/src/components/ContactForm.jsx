import { useCallback, useRef, useState } from "react";
import DropDown from "./DropDown";
import Button from "./Button";
import SuccessBanner from "./SuccessBanner";
import '../assets/styles/contact-form.css';

// Regex expressions to validate the input fields
const nameRegex = /[0-9]|[\W]k/;
const numberRegex = /^\d{10}$/;

const ContactForm = ({ placeData }) => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const nameRef = useRef('');
    const numberRef = useRef('');
    const timeoutRef = useRef('');
    const [nameErr, setNameErr] = useState('');
    const [numberErr, setNumberErr] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({});

    const handleNameChange = useCallback((event) => {
        const inputValue = event.target.value;
        if (nameRegex.test(inputValue)) {
            setNameErr('Name cannot contain numbers or special characters');
        } else if (inputValue.length < 8) {
            setNameErr('Name should contain minimum of 8 characters');
        } else {
            setNameErr('');
        }
    }, []);

    const handleNumberChange = useCallback((event) => {
        const inputValue = event.target.value;
        if (!numberRegex.test(inputValue)) {
            setNumberErr('Number should contain 10 digits and not any characters');
        } else {
            setNumberErr('');
        }
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if (nameRef.current.value && numberRef.current.value && !nameErr && !numberErr) { // if all fields are valid
            setIsSubmitted(true);
            setSubmittedData({ 
                name: nameRef.current.value,
                source: source,
                destination: destination
            });
            // clearing previous timeout instance in case of overalapping form submissions
            if (timeoutRef.current) clearTimeout(timeoutRef.current); 
            const timeOutId = setTimeout(() => {
                setIsSubmitted(false);
                setSubmittedData({});
            }, 10000);
            timeoutRef.current = timeOutId;
            // Clearing all states and input values
            nameRef.current.value = '';
            numberRef.current.value = '';
            setSource('');
            setDestination('');
        }
    }, [source, destination, nameErr, numberErr]);
    return (
        <div className="contact-section-wrapper">
            <div className="form-container">
                <h2 className="contact-form-header">Contact Us</h2>
                <p className="contact-form-text">Our Sales Team will reach out to you ASAP!</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="label-text">Name</label>
                    <input type="text" id="name" ref={nameRef} onChange={handleNameChange}/>
                    <p className="error-text">{nameErr}</p>
                    <DropDown placeData={placeData} selectedValue={source} setValue={setSource} selectedPlace={destination} labelText={'Your Home Town'} inputID={'source'} />
                    <DropDown placeData={placeData} selectedValue={destination} setValue={setDestination} selectedPlace={source} labelText={'Where would you like to go?'} inputID={'destination'} />
                    <label htmlFor="contact-number" className="label-text">Contact Number</label>
                    <input type="tel" id="contact-number" ref={numberRef} onChange={handleNumberChange}/>
                    <p className="error-text">{numberErr}</p>
                    <Button>SUBMIT INTEREST</Button>
                </ form>
            </div>
            {/* Displaying successbanner on successful submission of the form */}
            {isSubmitted && <SuccessBanner submittedData={submittedData} />}
        </div>
    )
}

export default ContactForm;