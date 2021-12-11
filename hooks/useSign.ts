import { useFormik } from "formik";
import React from "react";
import { supabase } from "lib/supabase/config";
import { accessToApp } from "lib/supabase/utils";

export function useSign(isLoginAction: boolean) {
  const validate = (values: { email: string; password: string }) => {
    const errors: { email?: string; password?: string } = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 20) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      console.log(validate(formik.values), formik);
      try {
        await accessToApp({
          typeAccess: isLoginAction ? "login" : "register",
          user: formik.values,
        });
      } catch (e) {
        console.log(e);
      }
    },
  });
  return { formik };
}
