import * as yup from "yup";

export const RestaurantFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  branch: yup.string().required("branch is required"),
  address: yup.string().required("Address is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
  description: yup.string().required("Description is required"),
  cover_image: yup.string().nullable().required("Cover image is required"),
  profile_image: yup.string().nullable().required("Profile image is required"),
  user_id: yup.string().required("User ID is required"),
});

export type RestaurantFormValues = yup.InferType<typeof RestaurantFormSchema>;
