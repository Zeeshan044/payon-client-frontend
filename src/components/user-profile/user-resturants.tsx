import React from "react";
import Button from "../ui/button";
import { openModal } from "@/features/modal/modalSlice";
import { useDispatch } from "react-redux";

import { HiPlus, HiTrash, HiPencil } from "react-icons/hi";
import { useGetUserRestaurantsQuery } from "@/services/data/restaurant.data";
import PageLoader from "../ui/page-loader";

const UserRestaurants = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserRestaurantsQuery(1);

  const handleViewMore = () => {
    dispatch(
      openModal({
        view: "VIEW_RESTURANT",
        data: { title: "Restaurant Details" },
      })
    );
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="border rounded-2xl p-6 shadow bg-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Restaurants</h1>
        <div>
          <Button>
            <HiPlus className="w-4 h-4" />
            <span>Add</span>
          </Button>
        </div>
      </div>

      {/* Body */}
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-2xl overflow-hidden">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
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
                      onClick={handleViewMore}
                    >
                      {restaurant.name}
                    </div>
                  </th>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">{restaurant.address}</td>
                  <td className="px-6 py-4">{restaurant.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4">
                      <HiTrash className="h-5 w-5 text-red-500" />
                      <HiPencil className="h-5 w-5 text-blue-500" />
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

  // return (
  //     <div className="lg:mr-10 lg:mt-32 m-10 ">
  //         <div>
  //             <h1 className="text-3xl font-bold">Restaurants</h1>
  //             <div className="border-2 bg-slate-300 flex flex-col lg:flex-row items-center justify-between max-w-2xl p-2 md:my-5">
  //                 <div className="mb-4 md:mr-4">
  //                     <Image
  //                         src={IMAGES.NO_IMAGE}
  //                         alt=""
  //                         className="w-20 h-20 rounded-full object-cover"
  //                     />
  //                     <h2 className="font-bold text-xl mt-2 md:text-right">cheezious</h2>
  //                 </div>
  //                 <div className="flex flex-col items-end flex-wrap">
  //                     <div>
  //                         <p>Lorem ipsum, dolor sit amet consectetur .....</p>
  //                         <p>New York, USA</p>
  //                     </div>

  //                     <div className="mt-5">
  //                         <Button className="" onClick={handleViewMore}>
  //                             View More
  //                         </Button>
  //                     </div>
  //                 </div>
  //             </div>
  //             <div className="border-2 bg-slate-300 flex flex-col lg:flex-row items-center justify-between max-w-2xl p-2 md:my-5">
  //                 <div className="mb-4 md:mr-4">
  //                     <Image
  //                         src={IMAGES.NO_IMAGE}
  //                         alt=""
  //                         className="w-20 h-20 rounded-full object-cover"
  //                     />
  //                     <h2 className="font-bold text-xl mt-2 md:text-right">cheezious</h2>
  //                 </div>
  //                 <div className="flex flex-col items-end flex-wrap">
  //                     <div>
  //                         <p>Lorem ipsum, dolor sit amet consectetur .....</p>
  //                         <p>New York, USA</p>
  //                     </div>

  //                     <div className="mt-5">
  //                         <Button className="" onClick={handleViewMore}>
  //                             View More
  //                         </Button>
  //                     </div>
  //                 </div>
  //             </div>

  //         </div>
  //     </div>
  // );
};

export default UserRestaurants;
