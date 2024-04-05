import { Link } from "react-router-dom";
import ordered from "../assets/images/ordered.png";
const Ordered = () => {
  return (
    <div className="w-[90vh] h-full flex flex-col  items-center">
      <img src={ordered} className="w-[30%]" />
      <h1 className="text-4xl text-light-black mb-2">Order Placed</h1>
      <Link
        to="/restaurants"
        className="bg-light-orange text-light-gray rounded-lg p-2"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Ordered;
