import { FaLocationCrosshairs } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserLocation } from "../Utils/Redux/userLocation";
import homeImg from "../assets/images/home.png";

const LandingPage = () => {
  const userLocation = useSelector((store) => store.userLocation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLocation() {
    await getUserLocation();
  }

  async function getUserLocation() {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userLocation = { latitude, longitude };
            dispatch(setUserLocation(userLocation));
            navigate("/restaurants");
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  }

  return (
    <div className="home-body h-[90vh] flex  items-center justify-between m-4 ">
      <div className="home-details flex flex-col mx-w-[32rem] gap-8 m-8">
        <div className="home-text text-dark-orange flex flex-col items-start">
          <p className="text-[8rem] text-light-black font-bold leading-tight">
            Masala
          </p>
          <p className="ml-[15rem] text-[8rem] text-light-black font-bold leading-tight">
            Mandi
          </p>

          <span className="text-[5rem]">Your Cravings</span>
          <span className="text-3xl text-light-green">
            Delivered at the speed of a click.{" "}
          </span>
          <span className="text-2xl text-light-green">
            The quickest way to find your food
          </span>
        </div>

        <div className="btn-container flex w-full gap-16">
          <button
            onClick={handleLocation}
            className="text-2xl bg-light-orange text-light-gray py-3 rounded-xl px-6"
          >
            <FaLocationCrosshairs className="inline-block" /> Use Location
          </button>

          <Link
            className="text-2xl bg-black text-light-gray py-3 rounded-xl px-6"
            to="/restaurants"
          >
            Demo
          </Link>
        </div>
      </div>
      <div className="home-illustration flex justify-end w-[60%] pr-[10rem]">
        <img className=" w-[70%]" src={homeImg} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default LandingPage;
