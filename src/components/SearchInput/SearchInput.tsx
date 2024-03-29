import React from "react";
import debounce from 'lodash/debounce';
import './SearchInput.css';

interface Props {
    handleChange: (str: string) => void;
}

const SearchInput = ({handleChange}: Props) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value);
    };

    return (
        <>
            <input className="searchform__input" type="text" name="text" required placeholder="Search" onChange={debounce(handleInputChange, 1000)}/>
        </>
    );
};

export default SearchInput;
