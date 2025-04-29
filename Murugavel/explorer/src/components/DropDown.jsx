import "../assets/styles/dropdown.css";

const DropDown = ({ placeData, setValue, labelText, inputID, selectedPlace }) => {
    return (
        <>
            {labelText && <label className="label-text" htmlFor={inputID}>{labelText}</label>}
            <div className="select-wrapper">
                <select id={inputID} onChange={(event) => {
                    setValue(event.target.value);
                }}>
                    <option selected disabled>Choose</option>
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