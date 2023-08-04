'use client'
import React, { useState } from 'react';

function SubscriptionForm() {
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
    <div className="max-w-screen-xl mx-auto px-4 pt-3 flex flex-col md:flex-row md:justify-between md:items-center">
      <strong className="block text-2xl font-bold text-white text-center">
        با ما در تماس باشید
      </strong>
      <form
        className="mt-3 md:mt-0 md:w-80 w-full"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="relative min-w-[200px] max-w-[340px] mx-auto">
          <label className="sr-only" htmlFor="email">
            ایمیل
          </label>
          <button className="absolute rounded-full bg-orange-600 p-2 m-1 text-sm text-white transition hover:bg-orange-500">
            مشترک شدن
          </button>
          <input
            className={`w-full rounded-full bg-sky-900 p-3 text-sm outline-none outline-offset-0 text-white ${errorMessage ? 'focus:outline-red-600' : ''}`}
            autoComplete="off"
            type="email"
            placeholder="john@doe.com"
            dir="ltr"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && (
          <p className="text-red-600 mt-2">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}

export default SubscriptionForm;
