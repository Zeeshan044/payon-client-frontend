import React, { useState } from "react";
import PageLoader from "../ui/page-loader";
import MenuRow from "../ui/menu-row";
import IMAGES from "@/constants/images";
import { useDeleteProductMutation, useGetAllProductsQuery } from "@/services/data/product.data";
import Button from "../ui/button";
import ProductForm from "../forms/product-form";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";

export default function ProductList() {
  const { data, isLoading } = useGetAllProductsQuery();
  const { mutate: deleteProduct, isLoading: isLoadingDelete } = useDeleteProductMutation();
  const dispatch = useDispatch()
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleAddProduct = () => {
    dispatch(openModal({ view: "ADD_PRODUCT", data: { title: "Add Product" } }));
  };

  const onDeleteProduct = (id: number) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this item? This will delete all the addons in this product."
    );
    if (!confirmation) return;
    deleteProduct(id);
  };

  if (isLoading || isLoadingDelete) {
    return <PageLoader />;
  }

  return (
    < >
      <Button className="lg:hidden block mb-2" onClick={handleAddProduct}>
        Add Product
      </Button>
      {isAddingProduct && (
        <ProductForm onClose={() => setIsAddingProduct(false)} />
      )}
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
