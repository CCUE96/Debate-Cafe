import React from 'react'

function Input({ label, type, value, onChange}) {
    return (
        <label>
            {label}:
            <input type={type} value={value} onChange={onChange} required />
        </label>
    );
}

export default Input;