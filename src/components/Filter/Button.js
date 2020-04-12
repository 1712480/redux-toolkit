import React from 'react';

const Button = ({ onClick, active, children }) => (
    <button onClick={onClick} 
            disabled={active} 
            className="page-link btn btn-primary">
        {children}
    </button>
)

export default Button;