import React from 'react';

type InputProps = {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

const Input: React.FC<InputProps> = ({ type, value, onChange, required = false }) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="p-2 border border-gray-300 rounded"
    />
);

export default Input;
