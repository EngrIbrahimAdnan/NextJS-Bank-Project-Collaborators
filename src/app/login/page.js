"use client";

import { login } from "@/api/actions/auth";
import React, { startTransition } from "react";
import Input from "@/components/Input";

import Image from "next/image";

import loginImage from "../../../public/loginImg.jpg";

import { loginWithValidation } from "@/api/actions/auth";
import { useState, useActionState } from "react";

function LoginPage() {
  const [state, action] = useActionState(loginWithValidation, undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    console.log(username, password);

    startTransition(async () => {
      const validationResult = await action(formData);
    });

    console.log(formData);

    await login(username, password);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex h-screen w-screen">
            <div className="w-2/5 bg-grey-200 p-28 pr-98 pl-90">
              <h1 className="text-2xl">Login to your</h1>
              <h1 className="text-2xl">
                <strong>Online Banking account</strong>
              </h1>
              <p className="text-xs pt-4">Username</p>
              <Input
                className="p-2 rounded-md"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {state?.errors?.name && <p>{state.errors.name}</p>}
              <p className="text-xs pt-4">Password</p>
              <Input
                className="p-2 rounded-md"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {state?.errors?.password && (
                <div>
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="pt-4">
                {" "}
                <button
                  className="bg-red-600 hover:bg-red-800 transition duration-200 text-[--background] w-[100%] m-auto rounded-md p-2"
                  type="submit"
                >
                  Login
                </button>{" "}
              </div>

              <div className="p-2">
                <p>
                  New user?{" "}
                  <a href="./register">
                    <span className="text-red-400 hover:text-red-800 transition duration-200">
                      Register now
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="w-3/5 bg-green-200 relative h-full overflow-hidden group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              <Image
                src={loginImage}
                layout="fill" // Enables the image to fill the parent div
                objectFit="cover" // Ensures the image covers the div while keeping its aspect ratio
                alt="Image for Innovate today for the future"
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
