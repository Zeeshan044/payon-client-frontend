import React, { useEffect, useState } from "react";
// import PageLoader from "../ui/page-loader";
// import MenuRow from "../ui/menu-row";
import { useDeleteProductMutation } from "@/services/data/product.data";
import { useDispatch } from "react-redux";
// import { openModal } from "@/features/modal/modalSlice";
// import { IProductResponse } from "@/types/api";
// import { setSelectedProduct } from "@/features/product/productSlice";
// import { toast } from "react-toastify";
import ProductRow from "../ui/product-row";
import { Category, IProduct } from "@/types/api";

interface Props {
  products: IProduct[] | undefined;
  category: Category | undefined;
}

const ProductList: React.FC<Props> = ({ products, category }) => {
  console.log("Products", products);
  // const { mutate: deleteProduct, isLoading: isLoadingDelete } =
  //   useDeleteProductMutation();

  // const dispatch = useDispatch();

  // const onDeleteProduct = (id: number) => {
  //   const confirmation = window.confirm(
  //     "Are you sure you want to delete this item? This will delete all the addons in this product."
  //   );
  //   if (!confirmation) return;
  //   deleteProduct(id);
  //   toast.success("Product deleted successfully");
  // };
  // const handleUpdateProduct = (product: IProductResponse) => {
  //   dispatch(
  //     openModal({
  //       view: "UPDATE_PRODUCT",
  //       data: { title: "Update Product", product },
  //     })
  //   );
  //   dispatch(setSelectedProduct(product));
  // };

  return (
    <>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products?.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            category={category}
            onDelete={() => onDeleteProduct(product.id)}
            onEdit={() => handleUpdateProduct(product)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
