import React, { useState } from "react";
import { Order, TableOrderState } from "@/types";
import Layout from "@/components/Layout/layout";
import OrderCard from "@/components/ui/order-card";
import Overlay from "@/components/ui/overlay";
import Spinner from "@/components/ui/spinner";
import { ORDERS_DATA } from "@/data/orders";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import Tabs from "@/components/ui/ordersTabs";

interface Props {}

const TableOrders: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("all");

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
  return (
    <Layout>
      <Tabs tab={activeTab} onTabChange={setActiveTab} />
      <div className=" grid gap-2 lg:grid-cols-3 md:grid-cols-2">
        {true && (
          <>
            {activeTab === "all"
              ? ORDERS_DATA.map((order) => (
                  <div key={`${order.id}`} className="mt-5">
                    <OrderCard
                      tableName={order.table.name}
                      orderCount={order.order_items.length}
                      amount={order.total_price}
                      state={order.state}
                      createdAt={order.created_at}
                      onClick={() => handleViewOrder(order.id, order)}
                    />
                  </div>
                ))
              : ORDERS_DATA.filter((order) => order.state === activeTab).map(
                  (order) => (
                    <div key={`${order.id}`} className="mt-5">
                      <OrderCard
                        tableName={order.table.name}
                        orderCount={order.order_items.length}
                        amount={order.total_price}
                        state={order.state}
                        createdAt={order.created_at}
                        onClick={() => handleViewOrder(order.id, order)}
                      />
                    </div>
                  )
                )}
          </>
        )}
      </div>

      <Overlay>
        <Spinner fill="#FFF" size={96} />
      </Overlay>
    </Layout>
  );
};

export default TableOrders;
