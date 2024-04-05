import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BillDisplay = ({ items }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let price = 0;
    items.map((item) => {
      price += (item.foodCount * item.card.info.price) / 100;
    });
    price = price.toFixed(2);
    setTotal(price);
  }, [items]);
  return (
    <div className="w-full flex flex-col bg-dark-green p-4 rounded-lg">
      <div className="flex justify-center items-center text-xl font-bold text-light-gray">
        Bill Details
      </div>
      <div>
        <ul className=" my-4 p-2 border-y-2 border-light-gray ">
          {items.map((item) => {
            return (
              <li className="text-light-gray flex justify-between items-center font-medium p-1">
                <h1>
                  {item.card.info.name}({item.foodCount})
                </h1>
                <h1>
                  ₹
                  {item.foodCount * item.card.info.price
                    ? (item.card.info.price / 100).toFixed(2)
                    : (item.card.info.defaultPrice / 100).toFixed(2)}
                </h1>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between my-2 py-4 p-2 border-b-2 border-light-gray">
          <h1 className="text-light-gray text-xl font-bold">Total</h1>
          <h1 className="text-light-gray text-xl font-bold">₹{total}</h1>
        </div>
        <Link
          to="/ordered"
          className="inline-block bg-light-cream p-2 rounded-lg text-dark-black my-4 "
        >
          Check Out
        </Link>
      </div>
      
    </div>
  );
};

export default BillDisplay;
