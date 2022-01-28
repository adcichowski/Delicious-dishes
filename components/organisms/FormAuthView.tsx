import React, { useMemo } from "react";
import { Button } from "components/atoms/Button";
import { Input } from "components/atoms/Input";
import { useSign } from "hooks/useSign";
import { useLoginContext } from "context/LoginContext";
import Link from "next/link";

export function FormAuthView({ type }: { type: string }) {
  const isLoginForm = useMemo(() => type === "Login", []);
  const { formik } = useSign(isLoginForm);
  const { setUser } = useLoginContext();
  return (
    <div className="max-w-lg w-full">
      <h2 className="text-6xl text-center mb-4 font-medium">{type}</h2>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <Input
          labelText="Email:"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik?.errors?.email}
        />
        <Input
          name="password"
          type="password"
          labelText="Password:"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik?.errors?.password}
        />
        {isLoginForm ? null : (
          <Input
            name="repeatPassword"
            type="password"
            labelText="Repeat password:"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={formik?.errors?.repeatPassword}
          />
        )}
        <p className="mb-4">
          {!isLoginForm
            ? "If you have already account, just "
            : "You can join to us by the link "}
          <Link href={isLoginForm ? "/register" : "/login"}>
            <a className="underline font-bold underline text-xl ml-1 text-link cursor-pointer">
              {isLoginForm ? "Register" : "Sign In"}
            </a>
          </Link>
        </p>

        <div className="flex">
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
FormAuthView.displayName = "FormAuthView";
