import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";
import Button from "@/components/ui/button";

interface Props {
  table: any;
  type: "ROUND" | "RECTANGULAR" | "BAR";
  capacity: 2 | 4 | 6;
}

const TableCard: React.FC<Props> = ({ table, type, capacity }) => {
  const dispatch = useDispatch();

  const handleViewMoreClick = () => {
    dispatch(
      openModal({
        view: "VIEW_TABLE",
        data: { ...table, title: table.name },
      })
    );
  };
  return (
    <div className="relative h-screen flex justify-center items-start mt-5">
      {type === "RECTANGULAR" && (
        <>
          {capacity === 2 && (
            <>
              <div className="absolute top-[30px]  left-0 w-full h-full flex justify-between items-start p-5">
                {/* Yellow balls */}
                <div className="ball"></div>
                <div className="ball"></div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg z-10 border-l-4 border-primary ">
                <div className="flex items-center">
                  <div className="text-lg font-semibold">{table.name}</div>
                  <div className="text-sm text-gray-500 ml-2">Reserved</div>
                </div>
                <div className="text-xl font-bold">19:30</div>
                <button
                  onClick={handleViewMoreClick}
                  className={`px-4 py-2 mt-5 text-sm font-semibold rounded-md border border-gray-500`}
                >
                  View More
                </button>
              </div>
            </>
          )}
          {capacity === 6 && (
            <>
              <div className="absolute top-0 left-10 w-full h-full flex justify-between items-start p-2">
                {/* Yellow balls */}
                <div className="ball "></div>
                <div className="ball "></div>
                <div className="ball "></div>
              </div>
              <div className="absolute bottom-72 left-10  w-full h-full flex justify-between items-start p-2">
                {/* Yellow balls */}
                <div className="ball "></div>
                <div className="ball "></div>
                <div className="ball "></div>
              </div>

              <div className=" bg-white px-11 py-12 rounded-lg shadow-lg z-10 border-8 border-t-primary items-center text-center flex flex-col ">
                <div className="flex items-center">
                  <div className="text-lg font-semibold">{table.name}</div>
                  {/* <div className="text-sm text-gray-500 ml-2">Reserved</div> */}
                </div>
                <div className="text-xl font-bold">19:30</div>
                <Button
                  onClick={handleViewMoreClick}
                  variant="primary"
                  size="lg"
                  className=" text-sm mt-5"
                >
                  View Details
                </Button>
              </div>
            </>
          )}
        </>
      )}
      {type === "ROUND" && (
        <>
          <div className="absolute  w-full h-full flex justify-between items-start p-2">
            {/* Yellow balls */}
            <div className="ball absolute top-0 left-[99px]"></div>
            <div className="ball absolute bottom-[375px] left-[95px]"></div>

          </div>
          <div className="absolute top-[80px]  left-0 w-full h-full flex justify-between items-start p-1">
            {/* Yellow balls */}
            <div className="ball"></div>
            <div className="ball"></div>

          </div>
          <div className=" bg-white px-11 py-12 rounded-full shadow-lg z-10 border items-center text-center flex flex-col ">
            <div className="flex items-center">
              <div className="text-lg font-semibold">{table.name}</div>
              {/* <div className="text-sm text-gray-500 ml-2">Reserved</div> */}
            </div>
            <div className="text-xl font-bold">19:30</div>
            <Button
              onClick={handleViewMoreClick}
              variant="primary"
              size="lg"
              className=" text-sm mt-5"
            >
              View Details
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TableCard;
