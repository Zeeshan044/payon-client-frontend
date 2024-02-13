import * as yup from "yup";

export const CategoryFormSchema = yup.object().shape({
  image: yup.string().nullable().required("Image is required"),
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});

export type CategoryFormValues = yup.InferType<typeof CategoryFormSchema>;
