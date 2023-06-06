"use client";
import React, { useState, FormEvent } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col w-96 justify-center text-green-700 rounded-md mt-20 border p-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className="text-xl">Create a New Account</p>
      <label htmlFor="email" className="text-sm mt-4">
        Email
      </label>
      <input
        required
        type="email"
        name="email"
        className="border outline-green-300 mt-1 px-2 py-1"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" className="text-sm mt-4">
        Password
      </label>
      <input
        required
        type="password"
        name="password"
        className="border outline-green-300 mt-1 px-2 py-1"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-400 py-2 px-4 rounded-md mt-4 text-white hover:bg-green-300">
        Sign Up
      </button>
    </form>
  );
}
