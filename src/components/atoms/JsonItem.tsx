import React from 'react';

interface JsonItemProps {
    label: string;
    value: any;
}

const JsonItem: React.FC<JsonItemProps> = ({ label, value }) => {
    return (
        <div className="flex items-center space-x-2">
            <span className="font-medium">{label}:</span>
            <span>{value}</span>
        </div>
    );
};

export default JsonItem;
