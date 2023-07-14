import CartOption from "../cartOption/CartOption";
import style from "./Cart.module.css";

const CartMenu = () => {
  return (
    <div className={style.menu}>
      <div className={style.option}>
        <CartOption />
        <CartOption />
        <CartOption />
      </div>
      <div className={style.priceline}>
        <h2>Total</h2>
        <h2 className={style.price}>R$ 999,90</h2>
      </div>
    </div>
  );
};

export default CartMenu;
