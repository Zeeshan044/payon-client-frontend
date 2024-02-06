import Layout from "@/components/layout/layout";
import UserProfile from "@/components/user-profile/user-profile";
import UserResturants from "@/components/user-profile/user-resturants";

const Profile = () => {
  return (
    <Layout>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserProfile />
        <UserResturants />
      </div>
    </Layout>
  );
};

export default Profile;
