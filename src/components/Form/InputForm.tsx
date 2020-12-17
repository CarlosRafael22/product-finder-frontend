import React from 'react';

type InputFormProps = {
    type: string,
    label: string,
    placeholder: string,
    helpText?: string,
    value: string,
    onChangeCallback: Function
};

const InputForm = ({type, label, placeholder, helpText, value, onChangeCallback}: InputFormProps) => (
    <div className="form-group">
        <label htmlFor={`${label}Input`}>{label}</label>
        <input type={type} className="form-control" id={`${label}Input`} aria-describedby={`${label}Help`} aria-label={`${label}Input`}
            placeholder={placeholder} value={value} onChange={(event) => onChangeCallback(event.target.value)} />
        {helpText && <small id={`${label}Help`} className="form-text text-muted" data-testid='helpText'>{helpText}</small>}
    </div>
);


export default InputForm;
