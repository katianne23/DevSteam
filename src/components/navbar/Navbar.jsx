import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";

import Logo from "@/components/logo/Logo";
import Input from "@/components/forms/input/Input";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" />
      </div>
      <BsCart4 size={40} />
    </div>
  );
};

export default Navbar;
