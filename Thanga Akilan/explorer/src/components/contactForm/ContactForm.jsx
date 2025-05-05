import InputField from "../inputField/InputField"
import SelectElement from "../selectElement/SelectElement"
import styles from './ContactForm.module.css'


const ContactForm = ({placeData}) => {
    return(
        <section className={styles.contact_form_section}>
            <h3 className={styles.contact_form_heading}>Contact Us</h3>
            <p className={styles.contact_form_subheading}>Out Sales Team will reach out to you ASAP!</p>
            <form>
                <InputField labelName={"Name"} >
                    <input className={styles.input_element} type="text" />
                </InputField> 
                <InputField labelName={"Your Home Town"} >
                <SelectElement placeData={placeData} name={"from"}/>
                </InputField> 
                <InputField labelName={"Where would you like to go?"} >
                    <SelectElement placeData={placeData}  name={"to"}/>
                </InputField> 
                 <InputField labelName={"Contact Number"} >
                    <input className={styles.input_element} type="text" />
                </InputField> 
                <button className={styles.contact_form_submit}>SUBMIT INTEREST</button>
            </form>
        </section>
    )
}


export default ContactForm;