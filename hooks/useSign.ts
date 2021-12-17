import { useFormik } from "formik";
import React from "react";
import { supabase } from "lib/supabase/config";
import { accessToApp } from "lib/supabase/utils";

const setValidation = {
  email: {
    isRequired: true,
  },
  password: {
    isRequired: true,
  },
  repeatPassword: (isLoginAction: boolean) => {
    if (!isLoginAction)
      return {
        isRequired: true,
      };
  },
};
interface FormikInputs {
  email: string;
  password: string;
  reapeatPassword?: string;
}
export function useSign(isLoginAction: boolean) {
  const validate = (values: FormikInputs, errors: FormikInputs) => {
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
    if (!isLoginAction) {
      if (!values.repeatPassword) {
        errors.password = "Required";
      } else if (values.repeatPassword !== values.password) {
        errors.repeatPassword = "Password must be same";
      }
    }
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
        console.log(e);
      }
    },
  });
  return { formik };
}
