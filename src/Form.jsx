import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

    const Form = () => {
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            phoneNo: '',
            country: '',
            city: '',
            panNo: '',
            aadharNo: ''
        });
        const [errors, setErrors] = useState({});
        const [passwordVisible, setPasswordVisible] = useState(false);
       
        const navigate = useNavigate();

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
            console.log(value);
        };

        const validate = () => {
            const errors = {};
            if (!formData.firstName) errors.firstName = 'First name is required';
            if (!formData.lastName) errors.lastName = 'Last name is required';
            if (!formData.username) errors.username = 'Username is required';
            if (!formData.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = 'Email is invalid';
            }
            if (!formData.password) errors.password = 'Password is required';
            if (!formData.phoneNo) errors.phoneNo = 'Phone number is required';
            if (!formData.country) errors.country = 'Country is required';
            if (!formData.city) errors.city = 'City is required';
            if (!formData.panNo) errors.panNo = 'PAN number is required';
            if (!formData.aadharNo) errors.aadharNo = 'Aadhar number is required';
            else if(formData.aadharNo.length!=12)errors.aadharNo = 'Aadhar number should be 12 digit';

            setErrors(errors);
            return Object.keys(errors).length === 0;
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validate()) {
                navigate('/success', { state: { formData } });
            }
        };
       
        return (
         
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    {errors.firstName && <span className="text-red-600 text-sm">{errors.firstName}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    {errors.lastName && <span className="text-red-600 text-sm">{errors.lastName}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    {errors.username && <span className="text-red-600 text-sm">{errors.username}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                </div>
                <div className="mb-4 relative">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-10 text-blue-600">
                        {passwordVisible ? "Hide" : "Show"}
                    </button>
                    {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    {errors.phoneNo && <span className="text-red-600 text-sm">{errors.phoneNo}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Country</label>
                    <select name="country" value={formData.country} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200">
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        {/* Add more countries as needed */}
                    </select>
                    {errors.country && <span className="text-red-600 text-sm">{errors.country}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">City</label>
                    <select name="city" value={formData.city} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200">
                        <option value="">Select City</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        {/* Add more cities as needed */}
                    </select>
                    {errors.city && <span className="text-red-600 text-sm">{errors.city}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">PAN Number</label>
                    <input
                        type="text"
                        name="panNo"
                        value={formData.panNo}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    {errors.panNo && <span className="text-red-600 text-sm">{errors.panNo}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Aadhar Number</label>
                    <input
                        type="text"
                        name="aadharNo"
                        value={formData.aadharNo}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                    {errors.aadharNo && <span className="text-red-600 text-sm">{errors.aadharNo}</span>}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit</button>
            </form>



            
        );
    };

    export default Form;

