import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import Image from "next/image";
import DropdownMenu from "../ui/dropdown";
import Toggle from "@/assets/images/threeDots.svg";
import ProductRow from "../ui/product-row";


const ProductList = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();

  // const { data: addonsData } = useGetAllAddonsQuery()
  const { mutate: deleteProduct, isLoading: isLoadingDelete } = useDeleteProductMutation();
  const [products, setProducts] = useState()
  const [categories, setCategories] = useState()

  const dispatch = useDispatch()

  console.log(data, "Data of categories");
  console.log(error, "error")
  console.log(isLoading, "Loading")

  const onDeleteProduct = (id: number) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this item? This will delete all the addons in this product."
    );
    if (!confirmation) return;
    deleteProduct(id);
    toast.success("Product deleted successfully");

  };
  const handleUpdateProduct = (product: IProductResponse) => {
    dispatch(
      openModal({
        view: "UPDATE_PRODUCT",
        data: { title: "Update Product", product }
      })
    );
    dispatch(setSelectedProduct(product));
  };
  useEffect(() => {
    const finalCategories = data?.categories?.map(category => {
      return ({ id: category.id, name: category.name })
    })
    setCategories(finalCategories)
  }, [data]);


  if (isLoading) {
    return <PageLoader />;
  }




  return (
    < >
      {/* {
        console.log(data)
      } */}
      {/* <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data?.categories.map((category) =>
          category.products.map((product) => (
            <div key={product.id} className=" rounded-2xl border bg-white border-menuBorder py-6 px-12">
              <div  className="relative flex right-0">
                <button  onClick={() => handleToggleClick()}>
                  <Image src={Toggle} alt="toggle" />
                </button>
                <DropdownMenu
                  isOpen={openDropdown}
                  onEdit={() => onEditHandler(product)}
                  onDelete={() => onDeleteProduct(product.id)}
                />
              </div>
              <div className=" flex flex-col items-center text-center gap-2 text-fadeDark">
                <img src={product?.image || IMAGES.NO_IMAGE} alt={product.name} className=" rounded-full w-16 h-16" />
                <h4 className=" text-xl font-semibold ">{product.name}</h4>
                {/* <p>{product.description}</p> */}
      {/* <p className=" text-primary text-base font-normal">{category.name}</p>
                <p className=" text-lg font-semibold">$ {product.price}</p>
              </div>
            </div>
          ))
        )}
      </div> */}
      <div>
        {categories?.map((category) => (
          <MenuRow
            key={category.id}
            title={category.name}
          // description={category.description}
          // onEdit={() => handleUpdateCategory(category)}
          // onDelete={() => handleDeleteCategory(category.id)}
          />
        ))}
      </div>
      {/* <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data?.categories?.map((category) =>
          category.products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              addons={product.addons}
              allergens={product.allergens}
              onDelete={() => onDeleteProduct(product.id)}
              onEdit={() => handleUpdateProduct(product)}
              category={category}
            />
          ))
        )}
      </div> */}
    </>
  );
}

export default ProductList