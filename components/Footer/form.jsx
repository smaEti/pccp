"use client";
import React, { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        setEmail(e.target.value);
        // setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        if (!validateEmail(email)) {
            setErrorMessage("لطفا ایمیل معتبر وارد کنید!");
        } else {
            setEmail("");
            setErrorMessage("");
        }
    };

    return (
        <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-gray-300 sm:text-2xl">
                با ما در تماس باشید
            </strong>
            <form className="mt-6" onSubmit={handleSubmit} noValidate>
                <div className="mx-auto relative max-w-sm">
                    <label className="sr-only" htmlFor="email">
                        ایمیل
                    </label>
                    <input
                        className={`w-full rounded-full bg-sky-900 p-4 pe-32 text-sm font-medium border-none outline-none text-white ${errorMessage ? 'border-2 border-red-500' : ''}`}
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@doe.com"
                        dir="ltr"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <button className="absolute start-1 top-1/2 -translate-y-1/2 rounded-full bg-orange-600  px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-700">
                        مشترک شدن
                    </button>
                </div>
                {errorMessage && (
                    <p className="flex justify-center text-red-600 mt-2">{errorMessage}</p>
                )}
            </form>
        </div>
    );
};

export default Form;