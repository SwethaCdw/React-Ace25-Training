import "../assets/styles/dropdown.css";

const DropDown = ({ placeData, dropDownRef, labelText, inputID }) => {
    return (
        <>
            {labelText && <label className="label-text" htmlFor={inputID}>{labelText}</label>}
            <div className="select-wrapper">
                <select id={inputID} ref={dropDownRef} onChange={(event) => {
                    dropDownRef.current.value = event.target.value;
                }}>
                    <option selected disabled>Choose</option>
                    {placeData.map((data, index) =>
                        <option key={index} value={data.city.toLowerCase()}>{data.city}</option>    
                    )}
                </select>
                <span className="custom-arrow">▼</span>
            </div>
        </>
    )
};

export default DropDown;    