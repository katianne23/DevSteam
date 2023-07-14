import styles from "./navbar.module.css";


import Logo from "@/components/logo/Logo";
import Input from "@/components/forms/input/Input";
import CartButton from "../forms/cartButton/CartButton";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" />
      </div>
      <CartButton />
    </div>
  );
};

export default Navbar;
