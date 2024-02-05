import React, { useState } from "react";
import Tabs from "@/components/ui/tabs";
import CategoryForm from "@/components/forms/category-form";
import CategoryList from "@/components/categories/category-list";
import ProductList from "@/components/products/product-list";
import { CategoryFormValues } from "@/schema/category-form.schema";
import ProductForm from "@/components/forms/product-form";
import Layout from "@/components/layout/layout";

const TabItems = ["Categories", "Products"];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(TabItems[0]);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFormValues | null>(null);

  const onUpdateCategory = (category: CategoryFormValues) => {
    console.log("Update category:", category);
    setSelectedCategory(category);
  };

  return (
    <>
      <Layout>
        <div>
          <Tabs items={TabItems} onTabChange={(value) => setActiveTab(value)} />
        </div>
        <div className="grid grid-cols-5 gap-8 mt-4">
          <div className="col-span-2 bg-primary/10 rounded-md p-6">
            <div className="flex flex-col gap-3">
              {activeTab === "Categories" ? (
                <CategoryList onUpdateCategory={onUpdateCategory} />
              ) : (
                <ProductList />
              )}
            </div>
          </div>
          <div className="bg-primary/10 col-span-3 rounded-md p-6">
            {activeTab === "Categories" ? (
              <CategoryForm defaultValues={selectedCategory} />
            ) : (
              <ProductForm />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Menu;
