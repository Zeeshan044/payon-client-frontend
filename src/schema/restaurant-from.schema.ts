import * as yup from "yup";

export const RestaurantFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  branch: yup.string().required("branch is required"),
  image: yup.string().required("image is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
  description: yup.string().required("description is required"),
});

export type RestaurantFormValues = yup.InferType<typeof RestaurantFormSchema>;
