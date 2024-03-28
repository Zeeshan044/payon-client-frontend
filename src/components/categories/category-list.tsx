import MenuRow from "../ui/menu-row";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import { Category } from "@/types/api";
import { setSelectedCategory } from "@/features/category/categorySlice";

interface Props {
  categories: Category[] | undefined;
}
const CategoryList: React.FC<Props> = ({ categories }) => {
  const dispatch = useDispatch();
  const handleDeleteCategory = (id: number) => {
    dispatch(
      openModal({
        view: "DELETE_CATEGORY",
        data: { selectedCategory: id, title: "Delete Category" },
      })
    );
  };

  const handleUpdateCategory = (category: Category) => {
    dispatch(
      openModal({
        view: "UPDATE_CATEGORY",
        data: { title: "Update Category", category },
      })
    );
    dispatch(setSelectedCategory(category));
  };

  return (
    <>
      {categories?.map((category) => (
        <MenuRow
          key={category.id}
          title={category.name}
          onEdit={() => handleUpdateCategory(category)}
          onDelete={() => handleDeleteCategory(category.id)}
        />
      ))}
    </>
  );
};
export default CategoryList;
