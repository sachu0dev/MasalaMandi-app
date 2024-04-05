import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <a href="/" className="logo text-4xl font-semibold  ">
      Masala Mandi
    </a>
  );
};

export const Header = () => {
  // selector
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className=" header flex bg-light-black text-light-cream justify-between items-center px-[10vw] py-4 shadow-light-green shadow-sm h-[6vh]">
      <Title />
      <div className="nav-items">
        <ul className="flex gap-12  text-md">
          <Link to="/restaurants">
            <li>Restaurants</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/cart">
            <li className="relative">
              Cart{" "}
              {cart && cart.length === 0 ? null : (
                <span className="absolute top-[-10px] right-[-20px] text-xl font-bold text-light-orange">
                  {cart.length}
                </span>
              )}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
