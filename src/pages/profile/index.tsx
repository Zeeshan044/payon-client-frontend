import Layout from "@/components/layout/layout";
import UserProfile from "@/components/user-profile/user-profile";
import UserRestaurants from "@/components/user-profile/user-resturants";

const Profile = () => {

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-16">
        <div>
          <UserProfile />
        </div>
        <div className="col-span-2">
          <UserRestaurants
          />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
