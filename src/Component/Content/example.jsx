import { useRef, useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        country: '',
        newValue: '',
    });

    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        dobError: '',
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dobRef = useRef(null);
    const submitRef = useRef(null);

    const handleKeyPress = (event, nextInputRef) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            nextInputRef?.current?.focus();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [`${name}Error`]: '' }));
    };

    const handleOtherChange = (e) => {
        setFormData((prevData) => ({ ...prevData, country: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, dob } = formData;

        const nameStructure = /^[a-zA-Z \s]*$/;
        const emailStructure = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordStructure =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        const date = new Date(dob);
        const today = new Date();

        let formErrors = {};

        if (!nameStructure.test(name)) {
            formErrors.nameError = 'Please enter text only (Text and Spaces)';
        }
        if (!emailStructure.test(email)) {
            formErrors.emailError = 'This field must have a valid email format.';
        }
        if (!passwordStructure.test(password)) {
            formErrors.passwordError =
                'Field must have a minimum of 8 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.';
        }
        if (date > today) {
            formErrors.dobError = 'The DOB should be a past date';
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Reset the form
        setFormData({
            name: '',
            email: '',
            password: '',
            dob: '',
            country: '',
            newValue: '',
        });
    };

    return (
        <div className="Form-content">
            <div className="form-body">
                <form className="inputs" onSubmit={handleSubmit}>
                    <div className="input">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onKeyDown={(event) => handleKeyPress(event, emailRef)}
                        />
                        {errors.nameError && <p style={{ color: 'red' }}>{errors.nameError}</p>}
                    </div>

                    <div className="input">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            ref={emailRef}
                            onKeyDown={(event) => handleKeyPress(event, passwordRef)}
                        />
                        {errors.emailError && <p style={{ color: 'red' }}>{errors.emailError}</p>}
                    </div>

                    <div className="input">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            ref={passwordRef}
                            onKeyDown={(event) => handleKeyPress(event, dobRef)}
                        />
                        {errors.passwordError && <p style={{ color: 'red' }}>{errors.passwordError}</p>}
                    </div>

                    <div className="input">
                        <label>Date of Birth (DOB)</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            ref={dobRef}
                            onKeyDown={(event) => handleKeyPress(event, submitRef)}
                        />
                        {errors.dobError && <p style={{ color: 'red' }}>{errors.dobError}</p>}
                    </div>

                    <div className="input">
                        <label>Gender:</label>
                        <select
                            name="gender"
                            onKeyDown={(event) => handleKeyPress(event)}
                        >
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">TransGender</option>
                        </select>
                    </div>

                    <div className="input">
                        <label>Nationality</label>
                        <select
                            onChange={handleOtherChange}
                            name="country"
                            value={formData.country}
                            id="country"
                        >
                            <option value="1">India</option>
                            <option value="2">Others..</option>
                            {formData.newValue && <option value="3">{formData.newValue}</option>}
                        </select>
                        {formData.country === '2' && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter Your Region.."
                                    onKeyDown={(event) =>
                                        handleKeyPress(event, submitRef)
                                    }
                                   
                                />
                            </div>
                        )}
                    </div>

                    <button type="submit" ref={submitRef}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
