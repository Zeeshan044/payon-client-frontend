import React from "react";
import { ModalContent, ModalFooter } from "../ui/modal";
import Input from "../ui/input";
import Button from "../ui/button";

const AddStaff = () => {
    return (
        <form action="#" method="post">
            <ModalContent>
                <Input name="name" label="Name" id="name" />
                <label htmlFor=" mt-2">Select Role:</label>
                <select className="block w-full px-3 py-2 rounded-md border-2 bg-slate-200 text-black placeholder-black/60 focus:outline-none focus:border-black">
                    <option value="Founder">Founder</option>
                    <option value="Co-Founder">Co-Founder</option>
                    <option value="Chef">Chef</option>
                    <option value="Waiter">Waiter</option>
                    <option value="Manager">Manager</option>
                </select>
                <Input name="email" label="Email" id="email" />
                <Input name="phone" label="Phone" id="phone" />
                <Input name="restaurant" label="Restaurant" id="restaurant" />
                <Input name="startDate" label="Start Date" id="startDate" type="date" />
                <Input name="workingHours" label="Working Hours" id="workingHours" />
                <Input name="daysOff" label="Days Off" id="daysOff" />
            </ModalContent>
            <ModalFooter>
                <Button className="flex justify-end " type="submit">Submit</Button>
            </ModalFooter>
        </form>
    );
};

export default AddStaff;
