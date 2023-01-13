import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <div>
      <img src={img} alt='not found' />
      <h3>Ohhh page not found</h3>
      <Link to='/'>back home</Link>
    </div>
  );
};

export default Error;
