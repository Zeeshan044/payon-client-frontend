import { useMutation } from "react-query";
import { authClient } from "../client/auth.client";

export function useLoginMutation() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authClient.login({ email, password }),
    onSuccess: (data) => {
      if (!data) return;
      console.log("Data received on successful login:", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("user_id", data.user.id);
      console.log("Token:", data.token);
    },
  });
}

export function useLogoutMutation() {
  return useMutation({
    mutationFn: ({}: any) => authClient.logout(),
    onSuccess: () => {
      localStorage.removeItem("token");
    },
  });
}
