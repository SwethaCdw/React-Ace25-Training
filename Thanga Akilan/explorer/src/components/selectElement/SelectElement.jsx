import { useEffect } from "react"
import styles from './SelectElement.module.css'

const SelectElement = ({placeData}) => {

    return(
        <select className={styles.input_element} >
            <option hidden>Choose</option>
            {Array.isArray(placeData) && placeData.map((place)=>
                (<option value={place.city}>{place.city}</option>)
            )}
        </select>
    )
}


export default SelectElement;