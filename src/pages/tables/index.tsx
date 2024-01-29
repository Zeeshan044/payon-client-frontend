import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "@/components/Layout/Layout";
import TableCard from "@/components/ui/table-card";
import { RootState } from "@/app/store";
import { openModal } from "@/features/modal/modalSlice";
import Button from "@/components/ui/button";

interface Props {}

const Tables: React.FC<Props> = () => {
  const { tables, tableName } = useSelector((state: RootState) => state.table);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ view: "ADD_TABLE", data: { title: "Add Table" } }));
  };

  return (
    <>
      <Layout>
        <div>
          <div className="flex items-center justify-between border-b mb-8">
            <h2 className=" text-4xl font-bold">Tables</h2>
            <Button onClick={handleOpenModal} loading={false} className="my-4">
              Add Table
            </Button>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20">
            {tables.map((table: any, index) => {
              return <TableCard key={index} tableName={table} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tables;
