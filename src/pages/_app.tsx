import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import ManagedModal from "@/components/manages-modal/managed-modal";
import ProtectedRoute from "@/components/Layout/protected-route";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
        <ManagedModal />
        <ToastContainer />
      </QueryClientProvider>

    </Provider>
  );
}
