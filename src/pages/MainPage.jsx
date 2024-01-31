import { Link } from "react-router-dom";
import gif from "../assets/welcome.gif";

function MainPage() {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Welcome to my website!</h1>
      <img className="img-fluid rounded" src={gif} alt="" />
      <p>
        Newly released products are on the
        <Link to={"/products"}>Products Page</Link>
      </p>
    </div>
  );
}

export default MainPage;
