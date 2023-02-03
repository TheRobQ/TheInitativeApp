import React from 'react';

const FormInput = ( {
    type,
    placeholder,
    onChange,
    className,
    name,
    size,
    value,
    pattern, 
    id
} ) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            onChange={onChange} 
            className={className} 
            name={name} 
            size={size} 
            value={value} 
            pattern={pattern}
        />
    )
};

export default FormInput;