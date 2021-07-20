import React from 'react';

const FormInput = ( {name,
    type,
    placeholder,
    onChange,
    className,
    value,} ) => {
    return (
        <input type={type} className={className} name={name} onChange={onChange} value={value} placeholder={placeholder}/>
    )
};

export default FormInput;