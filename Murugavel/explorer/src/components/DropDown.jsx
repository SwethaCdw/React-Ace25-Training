import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/dropdown.css";

const DropDown = ({ placeData, setPlace }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        setSelected(option.city);
        setPlace(option.city);
        setIsOpen(false);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {selected || "Choose"}
                <span className={`dropdown-icon ${isOpen ? "rotate" : ""}`}>▼</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {placeData.map((data, index) => (
                        <li
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleSelect(data)}
                        >
                            {data.city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDown;    