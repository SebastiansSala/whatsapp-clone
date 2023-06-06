"use client";
import React, { useState } from "react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () =>
    setShowPassword((prevState) => !prevState);

  return (
    <form className="w-full flex flex-col justify-center items-center bg-white rounded-md mt-20">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
    </form>
  );
}
