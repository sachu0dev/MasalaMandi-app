import { useEffect, useState } from "react";

const useProfile = () => {
  const [name, setName] = useState("name");
  const [publicRepos, setPublicRepos] = useState("0");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    getMyinfo();
  }, []);
  async function getMyinfo() {
    const data = await fetch("https://api.github.com/users/sachu0dev");
    const json = await data.json();
    setName(json.name);
    setPublicRepos(json.public_repos);
    setImgUrl(json.avatar_url);
    console.log(json);
  }
  return { name, publicRepos, imgUrl };
};

export default useProfile;
