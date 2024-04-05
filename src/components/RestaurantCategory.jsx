import { SlArrowDown } from "react-icons/sl";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleCLick = () => {
    setShowIndex();
  };
  return (
    <div className="m-4">
      <div
        className="w-auto bg-dark-cream py-3 px-4 rounded-md flex justify-between font-bold text-xl items-center cursor-pointer"
        onClick={handleCLick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <SlArrowDown />
      </div>

      {showItems ? <ItemList items={data.itemCards} /> : null}
    </div>
  );
};

export default RestaurantCategory;
