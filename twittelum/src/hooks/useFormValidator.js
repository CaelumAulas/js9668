import { useState } from 'react';

export default function useFormValidator(validations) {
    const [errors, setErrors] = useState(createInitialState());
    const [isFormValid, setFormValid] = useState(false);

    function createInitialState() {
        const defaultErrors = {};

        for (let prop in validations) {
            defaultErrors[prop] = '';
        }

        return defaultErrors;
    }

    function validate(event) {
        const { name, value } = event.target;
        errors[name] = validations[name](value);
        setErrors({ ...errors });
        updateStatus();
    }

    function updateStatus() {
        let status = Object.values(errors).every(erro => erro.trim() === '');
        setFormValid(status);
    }

    return { errors, isFormValid, validate };
}