import InputField from "../inputField/InputField"
import SelectElement from "../selectElement/SelectElement"

import "./ContactForm.css"

const ContactForm = () => {
    return(
        <section className="contact-form-section">
            <h3>Contact Us</h3>
            <p>Out Sales Team will reach out to you ASAP!</p>
            <form>
                <InputField labelName={"Name"} >
                    <input className="input-element" type="text" />
                </InputField> 
                <InputField labelName={"Your Home Town"} >
                <SelectElement name={"from"}/>
                </InputField> 
                <InputField labelName={"Where would you like to go?"} >
                    <SelectElement  name={"to"}/>
                </InputField> 
                 <InputField labelName={"Contact Number"} >
                    <input className="input-element" type="text" />
                </InputField> 
            </form>
        </section>
    )
}


export default ContactForm;