import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { createClient } from "@supabase/supabase-js";
import { useSign } from "../../hooks/useSign";
import { useLoginContext } from "../../hooks/context/LoginContext";

export function Login() {
  const [isSingIn, setIsSingIn] = useState(true);
  const { formik } = useSign(isSingIn);
  const { setUser } = useLoginContext();
  return (
    <div className="grid w-96 justify-self-center">
      <h2 className="text-5xl text-center mb-4 font-medium">Login</h2>
      <form onSubmit={formik.handleSubmit} className="w-92">
        <div className="mb-4">
          <Input
            labelText="Email"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik?.errors?.email}
        </div>
        <div className="mb-6">
          <Input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            labelText="Password"
          />
          {formik?.errors?.password}
          {isSingIn && (
            <p>
              If you have already account, just{" "}
              <a className="text-green-400 font-bold underline text-2xl cursor-pointer">
                Sign In
              </a>
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button className="text-white-100 font-medium" type="submit">
            {isSingIn ? "Sign In" : "Register"}
          </Button>
          {isSingIn && (
            <Button
              onClick={() => setIsSingIn(!isSingIn)}
              className="bg-white-100 inline-block align-baseline border-2 py-2 px-4 rounded border-green-500 text-green-500 font-medium"
            >
              Create account
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
Login.displayName = "Login";
