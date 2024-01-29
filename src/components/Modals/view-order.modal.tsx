import { useSelector } from "react-redux";
import Button from "../ui/button";
import { ModalContent, ModalFooter } from "../ui/modal";
import { RootState } from "@/app/store";
import { OrderItem } from "@/types";
import OrderItemCard from "../ui/order-item-card";
import { convertToUSD } from "@/utils";

export default function ViewOrderModal() {
  const modalState = useSelector((state: RootState) => state.modal);

  return (
    <>
      <ModalContent>
        <div className="grid grid-cols-2 gap-2">
          {modalState.data.order.order_items.map(
            (item: OrderItem, index: number) => (
              <OrderItemCard key={item.id} data={item} index={index + 1} />
            )
          )}
        </div>
        <div>
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center font-bold justify-between">
              <p>Subtotal</p>
              <span>{convertToUSD(498.69)}</span>
            </div>
            <div className="flex items-center font-bold justify-between">
              <p>Tax</p>
              <span>{convertToUSD(8.69)}</span>
            </div>
            <div className="flex items-center font-bold justify-between">
              <p>Tip</p>
              <span>{convertToUSD(20.5)}</span>
            </div>
            <div className="flex items-center font-bold justify-between">
              <p>Total</p>
              <span>{convertToUSD(526.69)}</span>
            </div>
          </div>
        </div>
      </ModalContent>
      <ModalFooter>
        <div className="flex justify-end gap-6">
          <Button onClick={() => {}} className="px-5">
            Confirm
          </Button>
        </div>
      </ModalFooter>
    </>
  );
}
