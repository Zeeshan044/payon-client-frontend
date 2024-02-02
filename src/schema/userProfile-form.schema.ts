import * as yup from "yup";

export const UserProfileFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
});

export type UserProfileFormValues = yup.InferType<typeof UserProfileFormSchema>;
