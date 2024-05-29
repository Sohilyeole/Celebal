// src/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { formData } = location.state || {};
    const navigate=useNavigate()

    if (!formData) {
        return <div>No data submitted</div>;
    }
    setTimeout(() => {
        navigate('/');
    }, 5000);

    return (
        <div>
            <h2>Form Submission Successful</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
};

export default Success;
