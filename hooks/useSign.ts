import { useFormik } from "formik";
import React from "react";
import { supabase } from "../lib/supabase/config";

export function useSign(type: boolean) {
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
    validate,
    onSubmit: async () => {
      type
        ? await supabase.auth.signIn(formik.values)
        : await supabase.auth.signUp(formik.values);
    },
  });
  return { formik };
}
