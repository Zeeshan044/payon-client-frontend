import Layout from "@/components/layout/layout";
import { Heading } from "@/components/ui/heading";
import UserProfile from "@/components/user-profile/user-profile";
import UserRestaurants from "@/components/user-profile/user-resturants";

const Profile = () => {
  return (
    <Layout>
      <Heading title="Manage profile" />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 pt-16">
        <div>
          <UserProfile />
        </div>
        <div className="col-span-2">
          <UserRestaurants />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
