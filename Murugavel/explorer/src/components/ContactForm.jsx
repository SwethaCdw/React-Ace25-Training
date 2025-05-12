import { useCallback, useRef, useState } from "react";
import { CONTACTFORM } from "../constants/textConstants";
import DropDown from "./DropDown";
import Button from "./Button";
import SuccessBanner from "./SuccessBanner";
import '../assets/styles/contact-form.css';

// Regex expressions to validate the input fields
const nameRegex = /[0-9]|[\W]/;
const numberRegex = /^\d{10}$/;

const ContactForm = ({ placeData }) => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const nameRef = useRef('');
    const numberRef = useRef('');
    const timeoutRef = useRef('');
    const [formErr, setFormErr] = useState({ nameErr: '', numberErr: '', sourceErr: '', destErr: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({});

    const handleNameChange = useCallback((event) => {
        const inputValue = event.target.value;
        if (nameRegex.test(inputValue)) {
            setFormErr((prevErr) => ({...prevErr, nameErr: 'Name cannot contain numbers or special characters'}));
        } else if (inputValue.length < 8) {
            setFormErr((prevErr) => ({...prevErr, nameErr: 'Name should contain minimum of 8 characters'}));
        } else {
            setFormErr((prevErr) => ({...prevErr, nameErr: ''}));
        }
    }, []);

    const handleNumberChange = useCallback((event) => {
        const inputValue = event.target.value;
        if (!numberRegex.test(inputValue)) {
            setFormErr((prevErr) => ({...prevErr, numberErr: 'Number should contain 10 digits and not any characters'}));
        } else {
            setFormErr((prevErr) => ({...prevErr, numberErr: ''}));
        }
    }, []);

    const handleSourceChange = (event) => {
        const inputValue = event.target.value;
        if (formErr.sourceErr) {
            setFormErr((prevErr) => ({ ...prevErr, sourceErr: '' }))
        };
        setSource(inputValue);
    };

    const handleDestChange = (event) => {
        const inputValue = event.target.value;
        if (formErr.destErr) setFormErr((prevErr) => ({...prevErr, destErr: ''}));
        setDestination(inputValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nameRef.current.value) setFormErr((prevErr) => ({ ...prevErr, nameErr: 'Name is required' }));
        if (!source) setFormErr((prevErr) => ({ ...prevErr, sourceErr: 'Source is required' }));
        if (!destination) setFormErr((prevErr) => ({ ...prevErr, destErr: 'Destination is required' }));
        if (!numberRef.current.value) setFormErr((prevErr) => ({ ...prevErr, numberErr: 'Number is required' }));
        if (nameRef.current.value && numberRef.current.value && source && destination && !formErr.nameErr && !formErr.numberErr && !formErr.sourceErr && !formErr.destErr) { // if all fields are valid
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
            setFormErr({ nameErr: '', numberErr: '', sourceErr: '', destErr: '' });
        }
    };

    return (
        <div className="contact-section-wrapper">
            <div className="form-container ibm-plex">
                <h2 className="contact-form-header">{CONTACTFORM.HEADER}</h2>
                <p className="contact-form-text">{CONTACTFORM.INFO}</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="label-text">{CONTACTFORM.NAME}</label>
                    <input type="text" id="name" ref={nameRef} onBlur={handleNameChange} />
                    <p className="error-text">{formErr.nameErr}</p>

                    <DropDown placeData={placeData} selectedValue={source} handleChange={handleSourceChange} formErr={formErr} selectedPlace={destination} labelText={'Your Home Town'} inputID={'source'} />
                    <p className="error-text">{formErr.sourceErr}</p>

                    <DropDown placeData={placeData} selectedValue={destination} handleChange={handleDestChange} selectedPlace={source} labelText={'Where would you like to go?'} inputID={'destination'} />
                    <p className="error-text">{formErr.destErr}</p>

                    <label htmlFor="contact-number" className="label-text">{CONTACTFORM.NUMBER}</label>
                    <input type="tel" id="contact-number" ref={numberRef} onBlur={handleNumberChange}/>
                    <p className="error-text">{formErr.numberErr}</p>
                    <Button>{CONTACTFORM.BUTTON}</Button>
                </ form>
            </div>
            {/* Displaying successbanner on successful submission of the form */}
            {isSubmitted && <SuccessBanner submittedData={submittedData} />}
        </div>
    )
}

export default ContactForm;