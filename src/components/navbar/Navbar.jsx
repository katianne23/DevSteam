import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <input />
      <BsCart4 size={40} />
    </div>
  );
};

export default Navbar;
