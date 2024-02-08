import React from "react";
import debounce from 'lodash/debounce';

interface Props {
  handleChange: (str: string) => void;
}

const SearchInput = ({ handleChange }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search" onChange={debounce(handleInputChange, 1000)} />
    </div>
  );
};

export default SearchInput;
