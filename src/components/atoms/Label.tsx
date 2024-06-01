import React from 'react';

type LabelProps = {
    children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ children }) => (
    <label className="block mb-2 font-bold">
        {children}
    </label>
);

export default Label;
