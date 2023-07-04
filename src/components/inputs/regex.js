import * as Yup from 'yup';

export const loginSchema = Yup.object({
    phone: Yup.string()
      .matches(/^\+(\d{1,3})(\d+)$/, "enter a valid country code")
      .required("Phone required"),
    password: Yup.string()
      .required("No password provided")
      .min(4, "Password is too short - should be 4 chars minimum.")
      .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
  });
