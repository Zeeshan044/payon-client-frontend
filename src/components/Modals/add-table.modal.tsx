import React, { use } from "react";
import Input from "../ui/input";
import { useDispatch } from "react-redux";
import { closeModal } from "@/features/modal/modalSlice";
// import { addTable } from "@/features/table/tableSlice";

import Button from "../ui/button";
import { ModalContent, ModalFooter } from "../ui/modal";
import { useCreateTableMutation } from "@/services/data/table.data";
import { toast } from "react-toastify";

interface Props {}
const AddTableModal: React.FC<Props> = ({}) => {
  const [tableName, setTableName] = React.useState<string>("");
  const [capacity, setCapacity] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const dispatch = useDispatch();

  const { mutate, isLoading } = useCreateTableMutation();

  const handleTableSubmit = () => {
    if (tableName.trim().length > 0) {
      setError("");
      // dispatch(addTable({ id: Date.now(), name: tableName }));
      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;
      if (!user) {
        return;
      }
      const restaurant_id = user.id;

      mutate(
        { name: tableName, restaurant_id, capacity },
        {
          onSuccess(data, variables, context) {
            dispatch(closeModal());
            toast.success("Table added successfully");
          },
        }
      );
    } else {
      setError("Table name cannot be empty. Please enter a valid name.");
    }
  };
  return (
    <div className="">
      <ModalContent>
        <Input
          id="name"
          label="Name"
          name="name"
          placeholder="Name"
          className="mb-2 "
          onChange={(e) => setTableName(e.target.value)}
          value={tableName}
          error={error}
        />
        <Input
          id="capacity"
          type="text"
          label="Capcity"
          name="Capcity"
          placeholder="Capcity"
          className="mb-2 "
          onChange={(e) => setCapacity(e.target.value)}
          value={capacity}
          error={error}
        />
      </ModalContent>
      <ModalFooter>
        <div className="flex justify-end">
          <Button onClick={handleTableSubmit}>
            {isLoading ? "Loading..." : "Add Table"}
          </Button>
        </div>
      </ModalFooter>
    </div>
  );
};

export default AddTableModal;
