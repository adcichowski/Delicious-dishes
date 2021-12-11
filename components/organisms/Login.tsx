import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "components/atoms/Button";
import { Input } from "components/atoms/Input";
import { createClient } from "@supabase/supabase-js";
import { useSign } from "hooks/useSign";
import { useLoginContext } from "context/LoginContext";
import Link from "next/link";

export function Login() {
  const [isSingIn, setIsSingIn] = useState(true);
  const { formik } = useSign(isSingIn);
  const { setUser } = useLoginContext();
  return (
    <div className="grid w-96 justify-self-center">
      <h2 className="text-6xl text-center mb-4 font-medium">
        {isSingIn ? "Login" : "Register"}
      </h2>
      <form onSubmit={formik.handleSubmit} className="w-92">
        <Input
          labelText="Email"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik?.errors?.email}

        <Input
          id="password"
          name="password"
          type="password"
          labelText="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik?.errors?.password}
        {isSingIn && (
          <p>
            If you have already account, just
            <Link href="/login">
              <a className="underline text-green-400 font-bold underline text-xl cursor-pointer">
                Sign In
              </a>
            </Link>
          </p>
        )}

        <div className="flex items-center justify-between">
          <Button className="text-white-100 font-medium" type="submit">
            {isSingIn ? "Sign In" : "Register"}
          </Button>

          <Button
            onClick={() => setIsSingIn(!isSingIn)}
            type="button"
            className="bg-white-100 inline-block align-baseline border-2 py-2 px-4 rounded border-green-500 text-green-500 font-medium"
          >
            {isSingIn ? "Create account" : "Just Login In"}
          </Button>
        </div>
      </form>
    </div>
  );
}
Login.displayName = "Login";
