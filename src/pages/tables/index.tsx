import React from "react";
import { useDispatch } from "react-redux";
import Layout from "@/components/Layout/layout";
import TableCard from "@/components/ui/table-card";
import { openModal } from "@/features/modal/modalSlice";
import Button from "@/components/ui/button";
import { useGetAllTablesQuery } from "@/services/data/table.data";
import PageLoader from "@/components/ui/page-loader";

interface Props {}

const Tables: React.FC<Props> = () => {
  const { data, isLoading } = useGetAllTablesQuery();

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ view: "ADD_TABLE", data: { title: "Add Table" } }));
  };

  console.log(data);

  return (
    <>
      <Layout>
        <div>
          <div className="flex items-center justify-between border-b mb-8">
            <h2 className=" text-4xl font-bold">Tables</h2>
            <Button onClick={handleOpenModal} className="my-4">
              Add Table
            </Button>
          </div>
          {isLoading ? (
            <PageLoader />
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20">
              <>
                {(data || []).map((table, index) => {
                  return <TableCard key={index} table={table} />;
                })}
              </>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Tables;
