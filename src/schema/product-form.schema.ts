import * as yup from "yup";

export const ProductFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  ingredients: yup.string().required("Ingredients are required"),
  price: yup.number().required("Price is required"),
  image: yup.string().nullable().required("image is required"),
  category_id: yup.number().required("Category is required"),
});

export type ProductFormValues = yup.InferType<typeof ProductFormSchema>;
