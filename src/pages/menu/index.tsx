import Layout from "@/components/Layout/layout";
import React from "react";
import MenuRow from "@/components/ui/menu-row";
import Tabs from "@/components/ui/tabs";

import CategoryForm from "@/components/Forms/CategoryForm/CategoryForm";
import ProductForm from "@/components/Forms/ProductForm/ProductForm";
import { useGetCategoriesQuery } from "@/services/api/category-api.service";
import PageLoader from "@/components/ui/page-loader";

const TabItems = ["Categories", "Products"];

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState(TabItems[0]);

  const { data, isLoading } = useGetCategoriesQuery({});

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Layout>
        <div>
          <Tabs items={TabItems} onTabChange={(value) => setActiveTab(value)} />
        </div>
        <div className="grid grid-cols-5 gap-8 mt-4">
          <div className="col-span-2 bg-primary/10 rounded-md p-6">
            <div className="flex flex-col gap-3">
              {data?.map((category) => (
                <MenuRow
                  key={category.id}
                  title={category.name}
                  description={category.description}
                  image={
                    "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
                  }
                />
              ))}
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
