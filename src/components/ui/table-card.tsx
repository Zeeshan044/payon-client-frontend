import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import Button from "@/components/ui/button";

interface Props {
  tableName: any;
}

const TableCard: React.FC<Props> = ({ tableName }) => {
  const dispatch = useDispatch();

  const handleViewMoreClick = () => {
    dispatch(
      openModal({
        view: "VIEW_TABLE",
        data: { ...tableName, title: tableName.name },
      })
    );
  };
  return (
    <div className="aspect-square bg-slate-100 rounded-full flex flex-col justify-center items-center gap-4 border border-primary shadow-md">
      <div className="font-bold">
        <span className="text-3xl">{tableName.name}</span>
      </div>

      <Button size="sm" onClick={handleViewMoreClick}>
        View more
      </Button>
    </div>
  );
};

export default TableCard;
