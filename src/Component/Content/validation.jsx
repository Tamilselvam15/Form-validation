export const validateName = (value) => {
    const nameStructure = /^[a-zA-Z\s]*$/;
    return nameStructure.test(value) ? '' : 'Please enter text only (letters and spaces)';
};

export const validateEmail = (value) => {
    const emailStructure = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailStructure.test(value) ? '' : 'This field must have a valid email format.';
};

export const validatePassword = (value) => {
    const passwordStructure = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordStructure.test(value) ? '' : 'Min 8 char, 1 upper& lowercase letter, 1 number &special character.';
};

export const validateDob = (value) => {
    const date = new Date(value);
    const today = new Date();
    return date <= today ? '' : 'The DOB should be a past date.';
};

export const validateGender = (value) => {
    return value ? '' : 'Select your gender!';
};

export const validateCountry = (value) => {
    return value ? '' : 'Select your country!';
};


