import React, { useState } from "react";
import Tabs from "@/components/ui/tabs";
import CategoryForm from "@/components/forms/category-form";
import CategoryList from "@/components/categories/category-list";
import ProductList from "@/components/products/product-list";
// import { CategoryFormValues } from "@/schema/category-form.schema";
import ProductForm from "@/components/forms/product-form";
import Layout from "@/components/layout/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { ProductFormValues } from "@/schema/product-form.schema";

const TabItems = ["Categories", "Products"];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(TabItems[0]);
  const { selectedCategory } = useSelector(
    (state: RootState) => state.category
  );
  const { selectedProduct } = useSelector(
    (state: RootState) => state.product
  );

  return (
    <>
      <Layout>
        <div>
          <Tabs items={TabItems} onTabChange={(value) => setActiveTab(value)} />
        </div>
        <div className="grid grid-cols-5 gap-8 mt-4">
          <div className="col-span-5 lg:col-span-2 bg-primary/10 rounded-md p-6">
            <div className="flex flex-col gap-3">
              {activeTab === "Categories" ? <CategoryList /> : <ProductList />}
            </div>
          </div>
          <div className="bg-primary/10 hidden lg:col-span-3 lg:block rounded-md p-6">
            {activeTab === "Categories" ? (
              <CategoryForm
                key={selectedCategory?.id || "add-category"}
                defaultValues={selectedCategory || null}
              />
            ) : (
              <ProductForm
                key={selectedProduct?.id || "add-product"}
                defaultValues={selectedProduct || null}
              />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Menu;
