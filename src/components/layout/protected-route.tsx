import React from "react";
import { useRouter } from "next/router";
import PageLoader from "../ui/page-loader";

interface Props {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  // const router = useRouter();
  // const [loading, setLoading] = React.useState(true);
  // const publicRoutes = React.useMemo(() => ["login", "forgot-password"], []);
  // const url = router.pathname.split("/")[1];

  // React.useEffect(() => {
  //   const isAuthenticated = localStorage.getItem("token");
  //   if (!isAuthenticated && !publicRoutes.includes(url)) {
  //     router.push("/login");
  //   }
  //   if (isAuthenticated && publicRoutes.includes(url)) {
  //     router.push("/orders");
  //   }
  //   setLoading(false);
  // }, [url, publicRoutes, router]);

  // if (loading) {
  //   return <PageLoader />;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
