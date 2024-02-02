import Layout from "@/components/Layout/Layout";
import React from "react";
import Tabs from "@/components/ui/tabs";
import CategoryForm from "@/components/Forms/CategoryForm/CategoryForm";
import ProductForm from "@/components/Forms/ProductForm/ProductForm";
import CategoryList from "@/components/categories/category-list";
import ProductList from "@/components/products/product-list";
const TabItems = ["Categories", "Products"];
const Menu = () => {
  const [activeTab, setActiveTab] = React.useState(TabItems[0]);

  return (
    <>
      <Layout>
        <div>
          <Tabs items={TabItems} onTabChange={(value) => setActiveTab(value)} />
        </div>
        <div className="grid grid-cols-5 gap-8 mt-4">
          <div className="col-span-2 bg-primary/10 rounded-md p-6">
            <div className="flex flex-col gap-3">
              {activeTab === "Categories" ? <CategoryList /> : <ProductList />}
            </div>
          </div>
          <div className="bg-primary/10 col-span-3 rounded-md p-6">
            {activeTab === "Categories" ? <CategoryForm /> : <ProductForm />}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Menu;
