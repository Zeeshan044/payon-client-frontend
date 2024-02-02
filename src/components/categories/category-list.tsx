import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/services/data/category.data";
import PageLoader from "../ui/page-loader";
import MenuRow from "../ui/menu-row";
import IMAGES from "@/constants/images";

export default function CategoryList() {
  const { data, isLoading } = useGetAllCategoriesQuery();
  const { mutate: deleteCategory, isLoading: isLoadingDelete } =
    useDeleteCategoryMutation();

  const { mutate: updateCategory, data: category } = useUpdateCategoryMutation()
  // const onUpdateCategory = async (id: number) => {
  //   console.log("update category : ", id);
  //    updateCategory(category);
  // };

  const onDeleteCategory = (id: number) => {
    const confirmation = confirm(
      "Are you sure you want to delete this item? This will delete all the products in this category."
    );
    if (!confirmation) return;
    deleteCategory(id);
  };

  if (isLoading || isLoadingDelete) {
    return <PageLoader />;
  }
  return (
    <>
      {data?.map((category) => (
        <MenuRow
          key={category.id}
          title={category.name}
          description={category.description}
          image={category?.image || IMAGES.NO_IMAGE}
          // onEdit={() => onUpdateCategory(category.id)}
          onDelete={() => onDeleteCategory(category.id)}
        />
      ))}
    </>
  );
}
