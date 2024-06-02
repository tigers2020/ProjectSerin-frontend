import React from 'react';
import Label from '@/components/atoms/Label';
import Input from '@/components/atoms/Input';

type FormRowProps = {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;

};

const FormRow: React.FC<FormRowProps> = ({label, type, value, onChange, required, placeholder}) => (
    <div className="mb-4">
        <Label htmlFor={label}>{label}</Label>
        <Input
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
        />
    </div>
);

export default FormRow;
