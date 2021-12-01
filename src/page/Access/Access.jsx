import "./access.css";
import { Link } from "react-router-dom";
const Access = () => {
  return (
    <>
      <img
        className="gif_access_ss"
        src="https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459__340.png"
        alt=""
      />
      <h3 className="h_ss">Access Location</h3>
      <p className="p_ss">
        To recommend fun places to visit near your location{" "}
      </p>
      <button className="access_ss">Allow Access</button>
      <Link to="/fernway/home/true">
        <p className="skip_ss">Skip for now</p>
      </Link>
    </>
  );
};
export { Access };
