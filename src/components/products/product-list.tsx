import PageLoader from "../ui/page-loader";
import MenuRow from "../ui/menu-row";
import IMAGES from "@/constants/images";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/services/data/product.data";

export default function ProductList() {
  const { data, isLoading } = useGetAllProductsQuery();
  const { mutate: deleteProduct, isLoading: isLoadingDelete } =
    useDeleteProductMutation();

  const onDeleteProduct = (id: number) => {
    const confirmation = confirm(
      "Are you sure you want to delete this item? This will delete all the addons in this product."
    );
    if (!confirmation) return;
    deleteProduct(id);
  };

  if (isLoading || isLoadingDelete) {
    return <PageLoader />;
  }
  return (
    <>
      {data?.map((product) => (
        <MenuRow
          key={product.id}
          title={product.name}
          description={product.description}
          image={product?.image || IMAGES.NO_IMAGE}
          price={product.price}
          onDelete={() => onDeleteProduct(product.id)}
        />
      ))}
    </>
  );
}
