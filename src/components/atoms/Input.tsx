import React from 'react';

type InputProps = {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
};

const Input: React.FC<InputProps> = ({ type, value, onChange, required = false, placeholder = '' }) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded"
    />
);

export default Input;
