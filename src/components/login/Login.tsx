"use client";

import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utill/FormHelper";
import { useState } from "react";
import { useRouter } from "next/navigation";
export interface FormValues {
  email: string;
  password: string;
}
export default function Login() {
  const Router = useRouter();
  const [formValue, setFromValue] = useState<FormValues>({
    email: "",
    password: "",
  });

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (IsEmail(formValue.email)) return ErrorToast("Invalid email address");
    if (IsEmpty(formValue.password)) return ErrorToast("Password is required");
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      const data = await response.json();
      if (data.status === "success"){
        SuccessToast("Login successfully!");
        Router.replace('/dashBoard')
      }else{
        ErrorToast("Something went wrong");
      }

    } catch (error) {
      ErrorToast("Error submitting form. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="max-w-sm mx-auto items-center "
    >
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-0  block w-full p-2.5  "
          placeholder="name@test.com"
          required
          value={formValue.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFromValue({
              ...formValue,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter your password
        </label>
        <input
          type="password"
          id="password"
          value={formValue.password}
          className="bg-gray-50 border border-gray-300 focus:ring-0  text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFromValue({
              ...formValue,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
