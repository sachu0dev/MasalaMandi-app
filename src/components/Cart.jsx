import { GiHamburger } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../Utils/Redux/cartSlice";
import CartPhoto from "../assets/images/add-to-cart.png";
import BillDisplay from "./BillDispay";
import ItemList from "./ItemList";
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {

    toast.error('Cart cleared successfully');
    dispatch(clearCart());
  };
  if (cartItem.length === 0) {
    return (
      <div className="empty-cart-container flex flex-col items-center w-full h-full">
        <img
          src={CartPhoto}
          alt=""
          className="empty-cart-img mt-3 w-[25rem] h-[25rem]"
          loading="lazy"
        />
        <span className="empty-cart-main-heading text-xl font-semibold mb-4">
          Your cart is empty
        </span>
        <span className="empty-cart-sub-heading text-center mb-4">
          Looks like you have not added anything to your cart. Go ahead &
          explore items in menu.
        </span>
        <Link
          to="/"
          className="bg-light-orange text-light-gray px-3 py-2  rounded-lg"
        >
          Add item
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center m-4 mx-[25vw] my-8 text-dark-green bg-dark-gray rounded-3xl p-8 min-h-screen">
      <div className="w-full flex justify-center p-4 mb-4  items-center relative">
        <GiHamburger className="text-3xl absolute  left-1" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
        {cartItem.length !== 0 ? (
          <button
            className="bg-light-orange text-light-gray p-2 text-md font-bold rounded-lg absolute right-1 flex justify-center items-center text-center"
            onClick={handleClearCart}
          >
            Not Hungery
            <MdDelete className="text-xl ml-2" />
          </button>
        ) : null}
      </div>
      <div>
        {cartItem.length === 0 && (
          <h1 className="text-xl">Cart is empty, Go grab somthing to eat</h1>
        )}
        <BillDisplay items={cartItem} />
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
