import "../assets/styles/dropdown.css";

const DropDown = ({ placeData, handleChange, labelText, inputID, selectedPlace, selectedValue}) => {
    return (
        <>
            {labelText && <label className="label-text" htmlFor={inputID}>{labelText}</label>}
            <div className="select-wrapper">
                <select id={inputID} value={selectedValue ? selectedValue : 'choose'} onChange={handleChange}>
                    <option value={'choose'} selected disabled>Choose</option>
                    {/* Iterating over placeData to fetch all city names */}
                    {placeData.map((data, index) => {
                        const isDisabled = data.city.toLowerCase() === selectedPlace; 
                        return (<option key={index} disabled={isDisabled} value={data.city.toLowerCase()}>{data.city}</option>);
                    })}
                </select>
                <span className="custom-arrow">▼</span>
            </div>
        </>
    )
};

export default DropDown;    