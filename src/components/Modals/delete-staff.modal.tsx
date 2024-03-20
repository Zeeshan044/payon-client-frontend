import React from "react";
import { ModalContent, ModalFooter } from "../ui/modal";
import Button from "../ui/button";
import { useDispatch } from "react-redux";
import { closeModal } from "@/features/modal/modalSlice";


const DeleteStaff = () => {
    const dispatch = useDispatch();

    return (
        <form action="#" method="post" className=" text-base font-medium">
            <ModalContent >
                <div className="  mb-4">
                    <h2 className=" text-xl mb-2">Are you sure you want to delete the Staff Member?</h2>
                    <p className=" text-[#64748B]">Deleting this staff member will remove its details from the system. This action cannot be undone.</p>
                </div>
                <div className="flex justify-end items-end gap-3">
                    <Button onClick={() => dispatch(closeModal())}
                        variant="cancel" className=" w-[146px]" type="submit">Cancel</Button>
                    <Button className="flex w-[146px] bg-gradient-to-r from-[#5271FF] to-[#40AFFF]" type="submit">Update Staff</Button>
                </div>
            </ModalContent>
        </form>
    );
};

export default DeleteStaff;
