import { useState } from 'react';

export const SearchLocation = (props) => {
    const {
        setLocation
    } = props;

    const [value, setValue] = useState('Moscow, Russia');

    const onInput = (e) => {
        setValue(e.currentTarget);
    }

    const onEnter = (e) => {
        if (e.keyCode === 13) {
            setLocation(e.currentTarget);
        } 
    }

    return (
        <input 
            type={'text'}
            value={value}
            onKeyUp={onEnter}
            onInput={onInput}
        />
    );
}