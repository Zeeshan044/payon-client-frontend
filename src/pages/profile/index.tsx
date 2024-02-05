import Layout from "@/components/layout/layout";
import UserProfile from "@/components/user-profile/user-profile";
import UserResturants from "@/components/user-profile/user-resturants";

const index = () => {
  return (
    <Layout>
      <div className=" grid lg:grid-cols-2  gap-20">
        <UserProfile />
        <UserResturants />
      </div>
    </Layout>
  );
};

export default index;
