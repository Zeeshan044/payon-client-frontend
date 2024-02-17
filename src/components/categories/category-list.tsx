import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/services/data/category.data";
import PageLoader from "../ui/page-loader";
import MenuRow from "../ui/menu-row";
import IMAGES from "@/constants/images";
import { CategoryFormValues } from "@/schema/category-form.schema";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import Button from "../ui/button";
import { ICategoryResponse } from "@/types/api";
import { setSelectedCategory } from "@/features/category/categorySlice";
import { toast } from "react-toastify";

// interface CategoryListProps {
//   onUpdateCategory: (category: CategoryFormValues) => void;
// }
const CategoryList: React.FC = () => {
  const { data, isLoading, refetch } = useGetAllCategoriesQuery();

  const { mutate: deleteCategory, isLoading: isLoadingDelete } =
    useDeleteCategoryMutation();
  const dispatch = useDispatch();

  const handleAddCategory = async () => {
    dispatch(
      openModal({ view: "ADD_CATEGORY", data: { title: "Add Category" } })
    );
    await refetch()
  };

  const onDeleteCategory = (id: number) => {
    const confirmation = confirm(
      "Are you sure you want to delete this item? This will delete all the products in this category."
    );
    if (!confirmation) return;
    deleteCategory(id);
    toast.success("Category deleted successfully");

  };

  const onEditHandler = (category: ICategoryResponse) => {
    if (window.innerWidth < 1024) {
      dispatch(
        openModal({
          view: "ADD_CATEGORY",
          // data: { category },
        })
      );
    }
    dispatch(setSelectedCategory(category));
  };

  if (isLoading || isLoadingDelete) {
    return <PageLoader />;
  }

  return (
    <>
      <Button className="lg:hidden block mb-2" onClick={handleAddCategory}>
        Add Category
      </Button>

      {data?.map((category) => (
        <MenuRow
          key={category.id}
          title={category.name}
          description={category.description}
          image={category?.image || IMAGES.NO_IMAGE}
          onEdit={() => onEditHandler(category)}
          onDelete={() => onDeleteCategory(category.id)}
        />
      ))}
    </>
  );
};
export default CategoryList;
