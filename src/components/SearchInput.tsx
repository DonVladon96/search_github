import React from "react";

interface Props {
  handleChange: (str: string) => void;
}

const SearchInput = ({ handleChange }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default SearchInput;