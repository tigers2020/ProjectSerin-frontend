import React from "react";

type ButtonProps = {
    type: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;

};

const Button: React.FC<ButtonProps> = ({type, children, onClick, className}) => (
    <button type={type} onClick={onClick} className="p-2 bg-blue-500 text-white rounded ${className}">
        {children}
    </button>
);

export default Button;