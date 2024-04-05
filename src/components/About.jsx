import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCode, FaGithubAlt } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  const [name, setName] = useState("name");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");

  async function getMyinfo() {
    const data = await fetch("https://api.github.com/users/sachu0dev");
    const json = await data.json();
    setName(json.name);
    setBio(json.bio);
    setProfilePic(json.avatar_url);
    setUsername(json.login);
    setLocation(json.location);
  }

  useEffect(() => {
    getMyinfo();
  }, []);
  return (
    <div className="min-h-[90vh] flex flex-col  items-center w-full">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl m-4 text-dark-green mt-12 font-bold">
          About Me
        </h1>
        <div className="m-4 w-[85%] flex   h-[17vw] p-4 bg-light-black rounded-xl">
          <img
            src={profilePic}
            alt="sachu0dev"
            className="h-full rounded-full"
          />
          <div className="p-8 ">
            <h1 className="text-light-gray font-bold text-4xl">{name}</h1>
            <p className="text-light-gray font-bold mb-2 text-lg">{username}</p>
            <p className="text-light-cream font-bold mb-2">
              <CiLocationOn className="inline-block" /> {location}
            </p>
            <p className="text-light-cream text-md  mb-2">{bio}</p>
            <div className="flex gap-4">
              <Link
                to="https://github.com/sachu0dev"
                target="_blank"
                className="inline-block m-2 bg-light-gray p-2 rounded-md font-semibold"
              >
                <FaGithubAlt className="inline-block" /> {username}
              </Link>
              <Link
                to="https://github.com/sachu0dev/MasalaMandi"
                target="_blank"
                className="inline-block m-2 bg-light-gray p-2 rounded-md font-semibold"
              >
                <FaCode className="inline-block" /> MasalaMandi
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-3xl m-4 text-dark-green font-bold">
          About Project
        </h1>
        <div className="text-lg m-4 text-light-green text-center">
          Masala Mandi is a food-ordering website that leverages the Swiggy API,
          a renowned food ordering platform. By harmonizing technology with
          culinary expertise, Masala Mandi endeavors to offer users a seamless
          and delightful platform for discovering, ordering, and relishing
          delectable meals from an array of restaurants and eateries.
        </div>
        <div className="text-lg m-4 text-light-green text-center">
          The website showcases a polished and user-friendly interface,
          facilitating effortless navigation through menus and order placement.
          Users can effortlessly search for their preferred restaurant, explore
          novel dining options, and tailor their orders to their liking. Whether
          yearning for traditional comfort fare or adventurous international
          tastes, Masala Mandi caters to every palate.
        </div>
      </div>
    </div>
  );
};

export default About;
