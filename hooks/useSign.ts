import { ErrorMessage, useFormik } from "formik";
import React from "react";
import { supabase } from "lib/supabase/config";
import { accessToApp } from "lib/supabase/utils";
import { capFirstLetter } from "utils/utils";

const VALIDATE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
interface FormikInputs {
  email: string;
  password: string;
  repeatPassword: string;
}
export function useSign(isLoginAction: boolean) {
  const validate = (values: FormikInputs) => {
    const errors = {
      email: "",
      password: "",
      repeatPassword: "",
    };

    if (!VALIDATE_EMAIL.test(values.email)) {
      errors.email = "Invalid email adress";
    }
    if (values.repeatPassword !== values.password && !isLoginAction) {
      errors.repeatPassword = "Password must be same";
    }
    if (values.password.length < 11) {
      errors.password = "Password is too short";
    }
    Object.keys(errors).forEach((validateInput) => {
      const key = validateInput as keyof FormikInputs;
      if (!values[key]) {
        errors[key] = "Required field!";
      }
    });
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: async () => {
      try {
        await accessToApp({
          typeAccess: isLoginAction ? "login" : "register",
          user: formik.values,
        });
      } catch (e) {
        //TODO: Show modal or popup when the client got error
      }
    },
  });
  return { formik };
}
