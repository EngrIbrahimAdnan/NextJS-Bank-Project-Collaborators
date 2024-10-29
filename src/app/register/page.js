"use client";
import { register, signupWithValidation } from "@/api/actions/auth";
import Input from "@/components/Input";
import React, { useState, startTransition } from "react";

import { useActionState, useFormStatus } from "react";

import Image from "next/image";

import registerImage from "../../../public/registerImg.jpg";

// register page
function Register() {
  const [state, action] = useActionState(signupWithValidation, undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    startTransition(async () => {
      const validationResult = await action(formData);
    });
    if (image) {
      formData.append("image", image);
    }

    await register(formData);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex h-screen w-screen">
            <div className="w-3/5 bg-green-200 relative w-full overflow-hidden group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              <Image
                src={registerImage}
                layout="fill" // Enables the image to fill the parent div
                objectFit="cover" // Ensures the image covers the div while keeping its aspect ratio
                alt="Image for Innovate today for the future"
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>

            <div className="w-2/5 bg-grey-200 p-28 pr-98 pl-90">
              <h1 className="text-2xl">Register for your</h1>
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

              <input
                className="pt-4"
                name="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />

              <div className="pt-4">
                {" "}
                <button
                  className="bg-red-600 hover:bg-red-800 transition duration-200 text-[--background] w-[100%] m-auto rounded-md p-2"
                  type="submit"
                >
                  Register
                </button>{" "}
              </div>

              <div className="p-2">
                <p>
                  Already a user?{" "}
                  <a href="./login">
                    <span className="text-red-400 hover:text-red-800 transition duration-200">
                      login here
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
