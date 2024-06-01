import React from 'react';
import Label from '@/components/atoms/Label';
import Input from '@/components/atoms/Input';

type FormRowProps = {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormRow: React.FC<FormRowProps> = ({ label, type, value, onChange }) => (
    <div className="mb-4">
        <Label>{label}</Label>
        <Input type={type} value={value} onChange={onChange} />
    </div>
);

export default FormRow;
