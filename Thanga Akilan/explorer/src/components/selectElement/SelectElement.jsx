

let places = [ {name: "Pollachi"},{name: "Thanjavur"},{name: "Chidambaram"},{name: "Masinagudi"},{name: "Kumbakkonam"},{name: "Tirunelveli"}]



const SelectElement = ({name }) => {


    return(
        <select className="input-element" name={name} id={`${name}-select`}>
            <option hidden>choose</option>
            {places.forEach((place)=>{
                <option value={place.name}>{place.name}</option>
            })}
        </select>
    )
}


export default SelectElement;