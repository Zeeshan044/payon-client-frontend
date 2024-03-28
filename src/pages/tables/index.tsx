import React from "react";
import { useDispatch } from "react-redux";
import Layout from "@/components/layout/layout";
import TableCard from "@/components/ui/table-card";
import { openModal } from "@/features/modal/modalSlice";
import Button from "@/components/ui/button";
import { useGetAllTablesQuery } from "@/services/data/table.data";
import PageLoader from "@/components/ui/page-loader";

interface Props { }

const Tables: React.FC<Props> = () => {
  // const { data, isLoading } = useGetAllTablesQuery();

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ view: "ADD_TABLE", data: { title: "Add Table" } }));
  };
  const dataTable: { id: number, name: string, status: string, time: string, capacity: 4 | 2 | 6 }[] = [
    {
      id: 1,
      name: "Table 1",
      status: "Reserved",
      time: "19:30",
      capacity: 4,
    },
    {
      id: 2,
      name: "Table 2",
      status: "Reserved",
      time: "19:30",
      capacity: 6,
    },
    {
      id: 3,
      name: "Table 3",
      status: "Reserved",
      time: "19:30",
      capacity: 2,
    },
  ];

  // console.log(data);

  return (
    <>
      <Layout>
        <div className=" mx-4">
          <div className="flex items-center justify-between border-b mb-8">
            <h2 className=" text-4xl font-bold">Tables</h2>
            <Button onClick={handleOpenModal} className="my-4">
              Add Table
            </Button>
          </div>
          {/* {isLoading ? (
            <PageLoader />
          ) : ( */}
          {/* <div className="grid w-full bg-primary/10 lg:grid-cols-4 md:grid-cols-2 gap-20">
            <>
              {(dataTable || []).map((table, index) => {
                return <TableCard key={index} table={table} />;
              })}
            </>
          </div> */}
          <div className="grid w-full bg-primary/10 lg:grid-cols-4 md:grid-cols-2 gap-20">
            {dataTable.map((table, index) => {
              let type: "ROUND" | "RECTANGULAR" | "BAR";
              let capacity: 2 | 4 | 6;
              if (table.capacity === 4) {
                type = "ROUND";
              } else if (table.capacity === 2) {
                type = "RECTANGULAR";
                capacity = 2;
              } else if (table.capacity === 6) {
                type = "RECTANGULAR";
                capacity = 6;
              }
              return <TableCard key={index} table={table} type={type} capacity={capacity} />;
            })}
          </div>
          {/* )} */}
        </div>
      </Layout>
    </>
  );
};

export default Tables;
