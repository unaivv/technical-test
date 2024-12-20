import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

const RegistrationForm: React.FC = () => {
    const [formState, setFormState] = useState({
        inputs: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const validateInputs = () => {
        let valid = true;
        const newErrors = { ...formState.errors };

        if (!formState.inputs.username) {
            newErrors.username = 'Username is required';
            valid = false;
        }
        if (!formState.inputs.email.includes('@')) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }
        if (formState.inputs.password.length < 8) {
            newErrors.password = 'Password is too short';
            valid = false;
        }
        if (formState.inputs.password !== formState.inputs.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setFormState((prevState) => ({ ...prevState, errors: newErrors }));
        return valid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateInputs()) {
            console.log('Registration successful!', formState.inputs);
            //Registration logic
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }));
    };

    useEffect(() => {
        const newErrors = { ...formState.errors };
        Object.keys(formState.inputs).forEach((key) => {
            if (formState.inputs[key as keyof typeof formState.inputs]) {
                newErrors[key as keyof typeof formState.errors] = '';
            }
        });
        setFormState((prevState) => ({ ...prevState, errors: newErrors }));
    }, [formState.inputs]);

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.row}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={formState.inputs.username}
                    onChange={handleChange}
                />
                {formState.errors.username && <div className="error">{formState.errors.username}</div>}
            </div>
            <div className={styles.row}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.inputs.email}
                    onChange={handleChange}
                />
                {formState.errors.email && <div className="error">{formState.errors.email}</div>}
            </div>
            <div className={styles.row}>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formState.inputs.password}
                    onChange={handleChange}
                />
                {formState.errors.password && <div className="error">{formState.errors.password}</div>}
            </div>
            <div className={styles.row}>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formState.inputs.confirmPassword}
                    onChange={handleChange}
                />
                {formState.errors.confirmPassword && <div className="error">{formState.errors.confirmPassword}</div>}
            </div>

            <button type="submit" className={styles.registerButton}>Register</button>
        </form>
    );
};

export default RegistrationForm;
