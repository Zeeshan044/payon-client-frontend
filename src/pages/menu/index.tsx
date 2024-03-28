import React, { useState } from "react";
import Tabs from "@/components/ui/tabs";
import CategoryForm from "@/components/forms/category-form";
import CategoryList from "@/components/categories/category-list";
import ProductList from "@/components/products/product-list";
import ProductForm from "@/components/forms/product-form";
import Layout from "@/components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Heading } from "@/components/ui/heading";
import Button from "@/components/ui/button";
import { openModal } from "@/features/modal/modalSlice";
import Image from "next/image";
import AddIcon from "@/assets/images/AddIcon.svg"
import ListIcon from "@/assets/images/list.svg"
import GridIcon from "@/assets/images/grid.svg"
import FilterIcon from "@/assets/images/filter.svg"
import AddCircleIcon from "@/assets/images/addCircle.svg"
import SearchIcon from "@/assets/images/seacrh.svg"

import Input from "@/components/ui/input";


const TabItems = ["Categories", "Products"];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(TabItems[0]);
  const dispatch = useDispatch()
  const { selectedCategory } = useSelector(
    (state: RootState) => state.category
  );
  const { selectedProduct } = useSelector((state: RootState) => state.product);
  const handleAddCategory = () => {
    dispatch(openModal({ view: "ADD_CATEGORY", data: { title: "Add Category" } }));
  }
  const handleAddProduct = () => {
    dispatch(openModal({ view: "ADD_PRODUCT", data: { title: "Add Product" } }));
  };
  return (
    <>
      <Layout>
        <div className="my-4 container mx-auto">

          <Heading title="Menu" />
          <div className=" mb-12 flex justify-between items-center">
            {/* <Tabs items={TabItems} onTabChange={(value) => setActiveTab(value)} /> */}
            <div>
              <h2 className=" text-primary font-medium text-3xl">Manage Dishes</h2>
            </div>
            <div className=" flex gap-2">
              <div className=" relative flex items-center ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 pl-10 pr-6 block w-full rounded-lg bg-white border border-gray-300 focus:outline-none focus:bg-white"
                />
                <Image src={SearchIcon} alt="icon" className="absolute inset-y-0 left-0 w-5 mt-3 ml-4 pointer-events-none text-gray-400"
                />
              </div>
              <Button onClick={() => handleAddProduct()}>
                <Image src={AddCircleIcon} alt="+" />
                Add New Dish
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-8 mt-4 ">
            <div className="col-span-5 lg:col-span-2 bg-cardBg rounded-2xl border border-primary p-6">
              <div className="flex flex-col gap-3  md:h-screen overflow-y-auto">
                {/* {activeTab === "Categories" ? <CategoryList /> : <ProductList />} */}
                <h2 className=" text-2xl font-medium mb-2">Dishes Categories</h2>
                <CategoryList />
                {/* <CategoryForm /> */}
                <Button onClick={() => { handleAddCategory() }} key={"Add  Category"}>
                  <Image src={AddIcon} alt="+" />
                  Add new category</Button>
              </div>
            </div>
            <div className="bg-cardBg hidden lg:col-span-4 lg:block rounded-2xl p-6 border border-primary">
              <div className=" flex justify-between items-center mb-4  ">
                <h1 className=" text-darkGrey text-2xl font-normal">All Dishes</h1>
                <div className=" text-darkGrey gap-2 flex">
                  <div className=" flex gap-2 items-center border bg-white shadow-md cursor-pointer border-gray-300 py-2 px-3  radius-sm">
                    <Image src={ListIcon} alt="icon" />
                    <p className=" text-xs ">List</p>
                  </div>
                  <div className=" flex gap-2 items-center bg-primary text-white border shadow-md cursor-pointer border-gray-300 py-2 px-3  radius-sm">
                    <Image src={GridIcon} alt="icon" />
                    <p className=" text-xs ">Grid</p>
                  </div>
                  <div className=" flex gap-2 items-center border bg-white shadow-md cursor-pointer border-gray-300 py-2 px-3  radius-sm">
                    <Image src={FilterIcon} alt="icon" />
                    <p className=" text-xs ">Filter</p>
                  </div>
                </div>
              </div>
              <div className="md:h-screen overflow-y-auto">
                <ProductList />
              </div>
              {/* {activeTab === "Categories" ? (
                <CategoryForm
                  key={selectedCategory?.id || "add-category"}
                  defaultValues={selectedCategory || null}
                />
              ) : (
                <ProductForm
                  key={selectedProduct?.id || "add-product"}
                  defaultValues={selectedProduct || null}
                />
              )} */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Menu;
