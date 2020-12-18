import React from 'react';

type InputFormProps = {
    type: string,
    name: string,
    label: string,
    placeholder: string,
    helpText?: string,
    value: string,
    onChangeCallback: Function
};

const InputForm = ({type, name, label, placeholder, helpText, value, onChangeCallback}: InputFormProps) => (
    <div className="form-group">
        <label htmlFor={`${name}-input`}>{label}</label>
        <input type={type} className="form-control" id={name} aria-describedby={`${name}-help`} aria-label={name}
            placeholder={placeholder} value={value} onChange={(event) => onChangeCallback(event.target.value)} />
        {helpText && <small id={`${name}-help`} className="form-text text-muted" data-testid='helpText'>{helpText}</small>}
    </div>
);


export default InputForm;
