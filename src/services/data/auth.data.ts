import { useMutation } from "react-query";
import { authClient } from "../client/auth.client";

export function useLoginMutation() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authClient.login({ email, password }),
    onSuccess: (data) => {
      if (!data) return;
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
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
