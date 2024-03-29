import React from "react";
import Button from "../ui/button";
import { openModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { HiPlus, HiTrash, HiPencil } from "react-icons/hi";
import {
  useDeleteRestaurantMutation,
  useGetUserRestaurantsQuery,
} from "@/services/data/restaurant.data";
import PageLoader from "../ui/page-loader";
import { setSelectedrestaurant } from "@/features/restaurant/restaurantSlice";
import { IRestaurantResponse } from "@/types/api";

const UserRestaurants = () => {
  const { mutate: deleteRestaurant } = useDeleteRestaurantMutation();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem("user_id") || "";
  const { data, isLoading } = useGetUserRestaurantsQuery(Number(user_id));
  const handleAddResturant = () => {
    dispatch(
      openModal({
        view: "ADD_RESTAURANT",
        data: { title: "Add Restaurant" },
      })
    );
  };
  const handleViewResturant = (restaurant: IRestaurantResponse) => {
    dispatch(
      openModal({
        view: "VIEW_RESTAURANT",
        data: { title: "Restaurant Details", restaurant },
      })
    );
    dispatch(setSelectedrestaurant(restaurant));
  };
  const handleUpdateResturant = (restaurant: IRestaurantResponse) => {
    dispatch(
      openModal({
        view: "UPDATE_RESTAURANT",
        data: { title: "Update Restaurant" },
      })
    );
    dispatch(setSelectedrestaurant(restaurant));
  };
  const handleDeleteRestaurant = (id: number) => {
    const confirmation = confirm(
      "Are you sure you want to delete this Restaurant?"
    );
    if (!confirmation) return;
    deleteRestaurant(id);
  };
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="border rounded-2xl p-6 mt-4 lg:mt-0 shadow bg-white mx-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl  mb-4 ">Restaurants</h1>
        <div className=" mb-2"></div>
      </div>

      {/* Body */}
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right  rounded-2xl overflow-hidden">
            <thead className="text-xs  uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Restaurant Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((restaurant) => (
                <tr key={restaurant.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div
                      className="hover:text-primary duration-200 cursor-pointer"
                      onClick={() => handleViewResturant(restaurant)}
                    >
                      {restaurant.name}
                    </div>
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">{restaurant.address}</td>
                  <td className="px-6 py-4">{restaurant.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4">
                      <HiPencil
                        className="h-5 w-5 text-blue-500 cursor-pointer"
                        onClick={() => handleUpdateResturant(restaurant)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UserRestaurants;
