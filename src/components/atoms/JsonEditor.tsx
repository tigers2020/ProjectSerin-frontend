import React, { useState, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

interface JsonEditorProps {
    label: string;
    json: object;
    onChange: (newJson: object) => void;
}

const ItemType = 'ENTRY';

const DraggableItem: React.FC<any> = ({ id, index, moveEntry, handleKeyChange, handleValueChange, removeEntry, keyText, valueText }) => {
    const [, ref] = useDrag({
        type: ItemType,
        item: { id, index }
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover(item: any) {
            if (item.index !== index) {
                moveEntry(item.index, index);
                item.index = index;
            }
        }
    });

    return (
        <div ref={(node) => ref(drop(node))} className="flex space-x-2 mb-2">
            <input
                type="text"
                placeholder="Key"
                value={keyText}
                onChange={(e) => handleKeyChange(index, e.target.value)}
                className="border p-2 rounded w-1/2"
            />
            <input
                type="text"
                placeholder="Value"
                value={valueText}
                onChange={(e) => handleValueChange(index, e.target.value)}
                className="border p-2 rounded w-1/2"
            />
            <button type="button" onClick={() => removeEntry(index)} className="text-red-500">
                Remove
            </button>
        </div>
    );
};

const JsonEditor: React.FC<JsonEditorProps> = ({ label, json, onChange }) => {
    const [entries, setEntries] = useState<Array<[string, string]>>([]);

    useEffect(() => {
        setEntries(Object.entries(json).map(([key, value]) => [key, value as string]));
    }, [json]);

    const handleKeyChange = (index: number, newKey: string) => {
        const newEntries = [...entries];
        newEntries[index][0] = newKey;
        setEntries(newEntries);
        updateJson(newEntries);
    };

    const handleValueChange = (index: number, newValue: string) => {
        const newEntries = [...entries];
        newEntries[index][1] = newValue;
        setEntries(newEntries);
        updateJson(newEntries);
    };

    const addEntry = () => {
        setEntries([...entries, ['', '']]);
    };

    const removeEntry = (index: number) => {
        const newEntries = entries.filter((_, i) => i !== index);
        setEntries(newEntries);
        updateJson(newEntries);
    };

    const moveEntry = (fromIndex: number, toIndex: number) => {
        const newEntries = update(entries, {
            $splice: [
                [fromIndex, 1],
                [toIndex, 0, entries[fromIndex]]
            ]
        });
        setEntries(newEntries);
        updateJson(newEntries);
    };

    const updateJson = (entries: Array<[string, string]>) => {
        const newJson = Object.fromEntries(entries);
        onChange(newJson);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                {entries.map(([key, value], index) => (
                    <DraggableItem
                        key={index}
                        id={index}
                        index={index}
                        moveEntry={moveEntry}
                        handleKeyChange={handleKeyChange}
                        handleValueChange={handleValueChange}
                        removeEntry={removeEntry}
                        keyText={key}
                        valueText={value}
                    />
                ))}
                <button type="button" onClick={addEntry} className="text-blue-500 mt-2">
                    Add Entry
                </button>
            </div>
        </DndProvider>
    );
};

export default JsonEditor;
