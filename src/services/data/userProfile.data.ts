import { useQuery } from "react-query";
import { IUserResponse } from "@/types/api";
import { userProfileClient } from "../client/userProfile.client";

export function useGetProfileQuery(id: number) {
  return useQuery<IUserResponse>({
    queryKey: ["user", id],
    queryFn: async () => {
      try {
        const response = await userProfileClient.get(id);
        return response;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });
}
