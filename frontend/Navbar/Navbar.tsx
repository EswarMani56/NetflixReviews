import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "black" }}>
      <Link to="/" style={{ color: "red", fontSize: "20px" }}>
        Netflix Reviews
      </Link>
    </nav>
  );
};

export default Navbar;
