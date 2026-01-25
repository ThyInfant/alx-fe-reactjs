import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex", // flex container
        justifyContent: "center", // center links horizontally
        backgroundColor: "#003366",
        padding: "10px",
        gap: "15px", // spacing between links
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/services" style={{ color: "white", textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
