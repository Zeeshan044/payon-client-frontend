import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import ManagedModal from "@/components/manages-modal/managed-modal";
import ProtectedRoute from "@/components/Layout/protected-route";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
      <ManagedModal />
    </Provider>
  );
}
