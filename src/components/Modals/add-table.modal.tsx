import React from "react";
import Input from "../ui/input";
import { useDispatch } from "react-redux";
import { closeModal } from "@/features/modal/modalSlice";
import { addTable } from "@/features/table/tableSlice";

import Button from "../ui/button";
import { ModalContent, ModalFooter } from "../ui/modal";

interface Props {}
const AddTableModal: React.FC<Props> = ({}) => {
  const [tableName, setTableName] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const dispatch = useDispatch();

  const handleTableSubmit = () => {
    if (tableName.trim().length > 0) {
      setError("");
      dispatch(addTable({ id: Date.now(), name: tableName }));
      dispatch(closeModal());
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
      </ModalContent>
      <ModalFooter>
        <div className="flex justify-end">
          <Button onClick={handleTableSubmit}>Submit</Button>
        </div>
      </ModalFooter>
    </div>
  );
};

export default AddTableModal;
