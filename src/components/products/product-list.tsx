import React, { useState } from "react";
import PageLoader from "../ui/page-loader";
import MenuRow from "../ui/menu-row";
import IMAGES from "@/constants/images";
import { useDeleteProductMutation, useGetAllProductsQuery } from "@/services/data/product.data";
import Button from "../ui/button";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import { IProductResponse } from "@/types/api";
import { setSelectedProduct } from "@/features/product/productSlice";
import { useGetAllAddonsQuery } from "@/services/data/addon.data";

const ProductList = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  // const { data: addonsData } = useGetAllAddonsQuery()
  const { mutate: deleteProduct, isLoading: isLoadingDelete } = useDeleteProductMutation();
  const dispatch = useDispatch()

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
  const onEditHandler = (product: IProductResponse) => {
    if (window.innerWidth < 1024) {
      dispatch(
        openModal({
          view: "ADD_PRODUCT",
          data: { title: "Update Product", product },
        })
      );
    }
    dispatch(setSelectedProduct(product));
  }
  if (isLoading || isLoadingDelete) {
    return <PageLoader />;
  }


  return (
    < >
      <Button className="lg:hidden block mb-2" onClick={handleAddProduct}>
        Add Product
      </Button>
      {data?.map((product) => (
        <MenuRow
          key={product.id}
          title={product.name}
          description={product.description}
          image={product?.image || IMAGES.NO_IMAGE}
          price={product.price}
          // {...addonsData?.map((addon) => {
          //   <MenuRow
          //     key={addon.id}
          //     AddonName={addon.name}
          //     AddonPrice={addon.price}
          //   />
          // })}
          onEdit={() => onEditHandler(product)}
          onDelete={() => onDeleteProduct(product.id)}
        />
      ))}
      {/* {addonsData?.map((addon) => {
        <MenuRow
          key={addon.id}
          AddonName={addon.name}
          AddonPrice={addon.price}
        />
      })} */}
    </>
  );
}

export default ProductList