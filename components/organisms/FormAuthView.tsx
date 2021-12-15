import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "components/atoms/Button";
import { Input } from "components/atoms/Input";
import { createClient } from "@supabase/supabase-js";
import { useSign } from "hooks/useSign";
import { useLoginContext } from "context/LoginContext";
import Link from "next/link";

export function FormAuthView({ type }: { type: string }) {
  const { formik } = useSign(type === "Login");
  const { setUser } = useLoginContext();
  return (
    <div className="grid w-96 justify-self-center">
      <h2 className="text-6xl text-center mb-4 font-medium">{type}</h2>
      <form onSubmit={formik.handleSubmit} className="w-92">
        <Input
          labelText="Email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik?.errors?.email}

        <Input
          name="password"
          type="password"
          labelText="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik?.errors?.password}
        {!!(type === "Login") && (
          <p>
            If you have already account, just
            <Link href="/register">
              <a className="underline text-green-400 font-bold underline text-xl cursor-pointer">
                Sign In
              </a>
            </Link>
          </p>
        )}

        <div className="flex items-center justify-center">
          <Button
            className="text-white-100 self-center font-medium"
            type="submit"
          >
            {type}
          </Button>
        </div>
      </form>
    </div>
  );
}
FormAuthView.displayName = "LoginView";
