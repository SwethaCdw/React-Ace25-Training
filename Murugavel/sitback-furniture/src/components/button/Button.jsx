import { memo } from 'react';
import equal from 'fast-deep-equal';
import './button.css';

const Button = ({ children, handleClick, isDisabled }) => {
    return (
        <button disabled={isDisabled} className='button' onClick={handleClick}>{children}</button>
    )
}

export default memo(Button, (prevProps, nextProps) => equal(prevProps.handleClick, nextProps.handleClick)
    && equal(prevProps.isDisabled, nextProps.isDisabled));