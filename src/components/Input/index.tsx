import React, {ChangeEventHandler, FocusEventHandler} from "react";
import {Field, FormikErrors, FormikTouched, FormikValues} from "formik";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type: string;
    name: string;
    id: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    as?: string;
    rows?: string;
    value?: string | number | readonly string[] | undefined;
    disabled?: boolean;
    errors: FormikErrors<FormikValues>;
    touched: FormikTouched<FormikValues>;
}

export default function Input({label, type, name, id, errors, touched, disabled, ...rest}: InputProps) {
    const errorClass =
        "bg-err border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500";
    const cleanClass =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const disabledClass =
        "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
    let className = cleanClass;
    if (errors[id] && touched[id]) {
        className = errorClass;
    }
    if (disabled) {
        className = disabledClass;
    }

    return (
        <>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <Field type={type} name={name} id={id} {...rest} className={className} disabled={disabled}/>
            {errors[id] && touched[id] && <span className="error text-error">{errors[id]?.toString()}</span>}
        </>
    );
}
