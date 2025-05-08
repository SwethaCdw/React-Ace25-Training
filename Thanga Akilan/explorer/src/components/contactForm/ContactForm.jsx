import { useState, useRef } from "react";
import InputField from "../inputField/InputField"
import SelectElement from "../selectElement/SelectElement"
import SuccessBanner from "../successBanner/SuccessBanner";
import styles from './ContactForm.module.css'
import { useParams } from "react-router";
import { CONTACT_US_FORM as CONSTANTS } from "../../contants";


const ContactForm = ({placeData}) => {
    const place = useParams();
    const nameValue = useRef();
    const numberValue = useRef();
    const [nameError, setNameError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const nameRegex = /^[a-z A-Z]+$/;
    const numberRegex = /^[0-9]+$/;
    const [isSubmitted, SetIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({});




    const handleNameChange = (event) => {
        const value = event.target.value;
        if(!nameRegex.test(value)){
            setNameError('Name can contain only alphabets!');
        }
        else if(value.length<8){
            setNameError('Name should be longer');
        }
        else{
            setNameError('');
        }

    }


    const handleNumberChange = (event) => {
        const value = event.target.value;
        if(!numberRegex.test(value)){
            setNumberError('Contact Number can contain only number!');
        }
        else if(value.length!=10){
            setNumberError('There should be only 10 digits');
        }
        else{
            setNumberError('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(nameValue.current.value && numberValue.current.value && !nameError && !numberError){
            SetIsSubmitted(true);
            setSubmittedData({
                name: nameValue.current.value,
                source: source,
                destination: destination
            })

        event.target.reset();
        setTimeout(handleBanner, 10000);
        } 
        else if(!nameValue.current.value || !numberValue.current.value){

        if(!nameValue.current.value){
            setNameError('Name cannot be empty');
        } 
         
        if(!numberValue.current.value){
            setNumberError('Contact Number cannot be empty');
        }
        return;
        }
    }

    const handleBanner = () => {
        SetIsSubmitted(false);
        setSubmittedData({});
    }



    return(
        <section className={styles.contact_form_section}>
            <h3 className={styles.contact_form_heading}>{CONSTANTS.HEADING}</h3>
            <p className={styles.contact_form_subheading}>{CONSTANTS.SUBHEADING}</p>
            <form className={styles.contact_form_input_container} onSubmit={handleSubmit}>
                <InputField labelName={CONSTANTS.NAME_LABEL} >
                    <input className={styles.input_element} ref={nameValue} onChange={handleNameChange} type="text" />
                    <p className={styles.error}>{nameError}</p>
                </InputField> 
                <InputField labelName={CONSTANTS.SOURCE_LABEL} >
                <SelectElement placeData={placeData} setPlace={setSource} checkerValue={destination} name={"from"}/>
                </InputField> 
                <InputField labelName={CONSTANTS.DESTINATION_LABEL} >
                    <SelectElement placeData={placeData} setPlace={setDestination} checkerValue={source} name={"to"}/>
                </InputField> 
                 <InputField labelName={CONSTANTS.CONTACT_NUMBER_LABEL} >
                    <input className={styles.input_element} ref={numberValue} onChange={handleNumberChange} type="text" />
                    <p className={styles.error}>{numberError}</p>
                </InputField> 
                <button className={styles.contact_form_submit}>{CONSTANTS.FORM_SUBMIT_BUTTON}</button>
            </form>
            {isSubmitted && <SuccessBanner submittedData={submittedData} />}
        </section>
    )
}


export default ContactForm;