import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([1]);
  const userLocation = useSelector((store) => store.userLocation);

  function getCards(json) {
    const restaurants = json.data.cards.filter((item) => {
      return (
        item.card.card.gridElements?.infoWithStyle?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      );
    });
    return restaurants[0].card.card.gridElements.infoWithStyle.restaurants;
  }

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      `${import.meta.env.VITE_RESTAURANTS_URL}?lat=${
        userLocation.latitude
      }&lng=${
        userLocation.longitude
      }&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    const restaurants = getCards(json);
    setAllRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  }
  return {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurant,
  };
};

export default useRestaurants;
