import React from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function Login() {
  return (
    <div className="grid w-96 justify-self-center">
      <h2 className="text-5xl text-center mb-4 font-medium">Login</h2>
      <form className="w-92">
        <div className="mb-4">
          <Input type="password" labelText="Username:" />
        </div>
        <div className="mb-6">
          <Input type="password" labelText="Password:" />
        </div>
        <div className="flex items-center justify-between">
          <Button
            element="button"
            className="text-white-100 font-medium"
            type="button"
          >
            Sign In
          </Button>
          <Button
            element="a"
            href="#"
            className="bg-white-100 inline-block align-baseline border-2 py-2 px-4 rounded border-green-500 text-green-500 font-medium"
          >
            Forgot Password?
          </Button>
        </div>
      </form>
    </div>
  );
}
Login.displayName = "Login";
