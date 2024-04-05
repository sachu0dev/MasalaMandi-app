import { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper.js";
import useOnline from "../Utils/useOnline.jsx";
import useRestaurants from "../Utils/useRestarants.jsx";
import Shimmer from "./Shimmer.jsx";
import RestarunrantCard, { withOpenLabel } from "./restaurantCard.jsx";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurant,
  } = useRestaurants();

  const RestaurantCardOpen = withOpenLabel(RestarunrantCard);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }
  const handleSearch = () => {
    const data = filterData(searchTxt, allRestaurants);
    setFilteredRestaurant(data);
  };
  if (filteredRestaurants?.length === 0)
    return (
      <>
        <div className="search-container flex w-[100vw] h-[8vh] justify-center items-center">
          <div>
            <input
              type="text"
              className="search-input text-[1.2rem] p-3 w-[30vw] bg-light-gray pl-8 mr-4 rounded-full border-2 border-dark-green"
              placeholder="Search"
              value={searchTxt}
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
            <button
              className="search-btn text-[1.2rem] w-20 h-12  rounded-full bg-light-orange text-light-cream"
              onClick={handleSearch}
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </>
    );
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container flex w-[100vw] h-[8vh] justify-center items-center">
        <div>
          <input
            type="text"
            className="search-input text-[1.2rem] p-3 w-[30vw] bg-light-gray pl-8 mr-4 rounded-full border-2 border-dark-green"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn text-[1.2rem] w-20 h-12 rounded-full bg-light-orange text-light-cream"
            onClick={handleSearch}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {/* <input
          className="border border-b-light-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        /> */}
      </div>
      <div className="restaurant-list flex flex-wrap px-[5vw] justify-center md:justify-center align-middle">
        {filteredRestaurants.map((restarunrant) => (
          <Link
            to={`restaurant/${restarunrant.info.id}`}
            key={restarunrant.info.id}
          >
            {restarunrant.info.isOpen ? (
              <RestaurantCardOpen {...restarunrant.info} />
            ) : (
              <RestarunrantCard {...restarunrant.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
