import React from 'react';

interface dropdownProps {
  name: string;
  placeholder: string;
  values: { id: number; value: string; icon?: any }[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const DropdownComponent: React.FC<dropdownProps> = ({
  name,
  placeholder,
  values,
  selectedValue,
  setSelectedValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <select
      name={name}
      required
      className=" cursor-pointer appearance-none text-sm  border border-gray-300 px-4 py-1.5  rounded focus:outline-none"
      value={selectedValue}
      onChange={handleChange}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {values.map((item) => (
        <option className="flex text-sm " key={item.id} value={item.value}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponent;
