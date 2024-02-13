import { useMutation, useQuery, useQueryClient } from "react-query";
import { IUserResponse, IUserUpdateRequest } from "@/types/api";
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

export function useUpdateProfileMutation() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: ({
      userId,
      data,
    }: {
      userId: number;
      data: IUserUpdateRequest;
    }) => userProfileClient.update(userId, data),
    onSuccess: (data) => {
      console.log("User updated successfully", data);
      client.invalidateQueries("user/getAll");
    },
  });
}
