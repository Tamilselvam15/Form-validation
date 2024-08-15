import { useState } from "react"

const useFormInput = (initialValue, validation) => {
    const [value, setvalue] = useState(initialValue);
    const [error, setError] = useState('');

    const handleChange = (e) => {

        const newValue = e.target.value;
        setvalue(newValue);

        if (validation) {
            const validationError = validation(newValue);
            setError(validationError);
        } else {
            setError('')
        }

      
    }
    const reset = () => {
        setvalue('');
        setError('');
    };

    return {
        reset,
        value,
        error,
        onChange: handleChange
    }
}

export default useFormInput