import React from "react";
import { Order, TableOrderState } from "@/types";
import Layout from "@/components/layout/layout";
import OrderCard from "@/components/ui/order-card";
import Overlay from "@/components/ui/overlay";
import Spinner from "@/components/ui/spinner";
import { ORDERS_DATA } from "@/data/orders";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";

interface Props { }

const TableOrders: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const handleViewOrder = (id: number, order: Order) => {
    dispatch(
      openModal({ view: "VIEW_ORDER", data: { title: `Order ${id}`, order } })
    );
  };

  const computeName = (value: string) => {
    switch (value) {
      case "pending":
        return "Action needed";
      case "confirmed":
        return "Sent to kitchen";
      case "completed":
        return "Served";
      default:
        return "";
    }
  };

  const renderLane = (state: TableOrderState) => (
    <div className="bg-gray-100 p-3 shadow-md">
      <div className="text-2xl uppercase md:text-4xl font-bold">
        <h2 className=" text-4xl font-bold">{computeName(state)}</h2>
      </div>
      {true && (
        <>
          {ORDERS_DATA.filter((order) => order.state === state).map((order) => (
            <div key={`${order.id}`} className="mt-5">
              <OrderCard
                tableName={order.table.name}
                orderCount={order.order_items.length}
                amount={order.total_price}
                onClick={() => handleViewOrder(order.id, order)}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
  return (
    <Layout>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {renderLane("pending")}
        {renderLane("confirmed")}
        {renderLane("completed")}
      </div>
      <Overlay>
        <Spinner fill="#FFF" size={96} />
      </Overlay>
    </Layout>
  );
};

export default TableOrders;
