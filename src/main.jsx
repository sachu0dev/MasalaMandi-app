import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
