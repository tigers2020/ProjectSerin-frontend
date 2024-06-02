import React from 'react';
import JsonItem from '@/components/atoms/JsonItem';

interface DynamicJsonDisplayProps {
    data: Record<string, any>;
}

const DynamicJsonDisplay: React.FC<DynamicJsonDisplayProps> = ({ data }) => {
    return (
        <div className="space-y-2">
            {Object.keys(data).map((key) => (
                <JsonItem key={key} label={key} value={data[key]} />
            ))}
        </div>
    );
};

export default DynamicJsonDisplay;
