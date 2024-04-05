import useProfile from "../Utils/useProfile";

const Profile = () => {
  const { name, publicRepos, imgUrl } = useProfile();
  return (
    <div>
      <h1>My Profile</h1>;<img src={imgUrl}></img>
      <h2>Name: {name}</h2>
      <h2>Publice repos: {publicRepos}</h2>
    </div>
  );
};

export default Profile;
