import { useNavigate } from "react-router-dom";
import errorImg from "../assets/images/error.png";
import locUnavailable from "../assets/images/locationUnavailable.png";

export default function ErrorScreen(props) {
  const type = props.type;
  const navigate = useNavigate();
  let imageLink, msg;

  if (type === "offline") {
    imageLink = errorImg;
    msg = "Oops! It looks like you've lost connection.";
  } else if (type === "unavailable") {
    imageLink = locUnavailable;
    msg = "Oops! Location unavailable ";
  } else {
    imageLink = errorImg;
    msg = "Something went wrong! Please try again";
  }

  return (
    <div className="offline-screen w-full h-full flex flex-col justify-center items-center">
      <img
        className="offline-screen-image w-[25rem] h-[25rem]"
        src={imageLink}
        alt="ERROR_404"
      />
      <span className="offline-screen-msg text-2xl font-bold mb-4">{msg}</span>
      <button
        onClick={() => navigate("/")}
        className="offline-screen-btn bg-light-orange text-light-gray px-4 py-2 rounded-xl"
      >
        Home
      </button>
    </div>
  );
}
