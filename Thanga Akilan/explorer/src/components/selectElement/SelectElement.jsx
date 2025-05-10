import { useEffect } from "react"
import styles from './SelectElement.module.css'
import { GoTriangleDown } from "react-icons/go";
import { SELECT_INPUT as CONSTANTS } from "../../contants";
import LabelWrapper from "../labelWrapper/labelWrapper";


const SelectElement = ({ labelName, placeData, setPlace, checkerValue}) => {

    const handleChange = (event) => {
        setPlace(event.target.value);
    }

    return(
        <LabelWrapper labelName={labelName}>
            <div className={styles.select_wrapper}>
                <select className={styles.input_element} onChange={handleChange} >
                    <option className={styles.hidden_option} hidden>{CONSTANTS.DEFAULT_VALUE}</option>
                    {Array.isArray(placeData) && placeData.map((place)=> {
                        const isDisabled = place.city == checkerValue;
                        return (<option key={place.city} disabled={isDisabled} value={place.city}>{place.city}</option>)}
                    )}
                </select>
                <div className={styles.dropdown_arrow}>
                    <GoTriangleDown />
                </div>
            </div>
        </LabelWrapper>
    )
}


export default SelectElement;