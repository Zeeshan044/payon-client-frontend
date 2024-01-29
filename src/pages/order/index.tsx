import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import OrderItemCard from "@/components/ui/order-item-card";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/router";
import { Order } from "@/types";
interface ConfirmPopup {
  type: "paid status" | "payment";
  value: any;
  orderId: string;
  onConfirm: (value: any) => void;
}

const TableOrder = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  const orderData: Order = {
    id: "1",
    createdAt: "2024-01-18",
    table: 1,
    username: "John Doe",
    orderItems: [
      {
        id: "string",
        name: "string",
        price: 100,
        deal: null,
        quantity: 3,
        comment: "string",
        state: "completed",
        orderNumber: 6,
        orderedAt: "10:45",
      },
    ],
    status: "completed",
    paymentMode: "cash",
    discount: null,
    profilePicture: null,
    tip: null,
    paid: true,
  };
  return (
    <Layout>
      <div className="m-4">
        <div>
          <div
            className="flex font-bold gap-2 items-center cursor-pointer"
            onClick={() => handleClick()}
          >
            <FontAwesomeIcon icon={faAngleLeft} className="h-6 mt-1" />
            <h1 className="text-4xl leading-none">Back</h1>
          </div>
        </div>
        <div className="gap-2 font-bold mb-2 mt-5">
          <span className="text-primary text-4xl">{`Table 10`}</span>
          <span className="text-4xl">
            <span className="size-6">&rarr;&nbsp;</span>
            <span>Order 24</span>
          </span>
        </div>

        <div className="max-w-sm">
          {/* Adding true intead of !fetchOrdersLoading && !fetchMenuLoading  */}
          {true ? (
            <OrderItemCard
              data={orderData}
              taxRate={2}
              index={1}
              onChangePaid={(value) => {}}
              onChangePaymentMode={(value) => {}}
              onClickAddItem={() => {}}
              onClickAddRefund={() => {}}
              orderNumber={123}
              tableOrderId="1"
            />
          ) : (
            <div>
              <Spinner fill={"#000000"} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default TableOrder;
