import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const userLocation = useSelector((store) => store.userLocation);
  console.log(userLocation);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showIndex, setShowIndex] = useState(0);
  async function getRestaurantInfo() {
    const data = await fetch(
      `${import.meta.env.VITE_FETCH_MENU_URL}&lat=${
        userLocation.latitude
      }&lng=${userLocation.longitude}&restaurantId=${id}`
    );
    const info = await data.json();
    const menuList =
      info.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setCategories(menuList);

    setRestaurantInfo(info.data.cards[2].card.card.info);
  }
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="menu-container mx-[25vw] my-8 text-dark-green bg-dark-gray rounded-3xl p-8 min-h-screen">
      <div className="menu-left flex justify-between">
        <div>
          <h1 className="text-4xl font-extrabold">{restaurantInfo.name}</h1>
          <h3 className="text-2xl font-bold mb-4 text-dark-orange">
            {restaurantInfo.area}
          </h3>
          <h2 className="city text-xl font-bold text-light-black">
            {restaurantInfo.cityndex === showIndex ? true : false}
          </h2>
          <h3 className="cuissines-name text-lg font-bold text-light-orange">
            {restaurantInfo.cuisines.join(", ")}
          </h3>
        </div>
        <div className="rate-container flex flex-col justify-center items-center">
          <h3 className="rating-box text-5xl font-extrabold text-light-orange">
            {restaurantInfo.avgRating}
          </h3>
          <h3 className="text-xl font-bold">
            {restaurantInfo.costForTwoMessage}
          </h3>
        </div>
      </div>
      <img
        className="restaurant-img w-full h-[20vh] object-cover rounded-lg"
        src={
          import.meta.env.VITE_IMG_CDN_URL + restaurantInfo.cloudinaryImageId
        }
      />
      <div className="menu-right">
        <p className="menu-header mt-8 text-4xl p-4 flex justify-center items-center">
          <i className="fa-solid fa-bowl-food mr-2"></i> menu
        </p>
      </div>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
