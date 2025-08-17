import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../styles/Login.css"
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
export default function Login() {
    const {user,setUser} = useContext(FormContext);
    const navigate = useNavigate();
    const formik = useFormik({
        // Initial values for the form fields
        initialValues: {
            username: '',
            email: '',
        },
        // Validation schema using Yup
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
        }),
        // Submission handler
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            setUser(values)
            alert(`Welcome, ${values.username}! Your info has been saved.`);
            navigate("/home")
        },
    });

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h1>Welcome Back</h1>
                        <p>Please enter your details to log in.</p>
                    </div>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        {/* Username */}
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className={`form-input ${formik.touched.username && formik.errors.username ? 'error-input' : ''}`}
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                placeholder="e.g., Dharmik"
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="error-message">{formik.errors.username}</div>
                            ) : null}
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`form-input ${formik.touched.email && formik.errors.email ? 'error-input' : ''}`}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="dharmik@example.com"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error-message">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={!formik.isValid}
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
