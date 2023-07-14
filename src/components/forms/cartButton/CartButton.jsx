import { useState } from "react";
import styles from "./CartButton.module.css";
import { BsCart4 } from "react-icons/bs";
import CartMenu from "@/components/cartMenu/CartMenu";

const CartButton = ({ cart, onRemove }) => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <BsCart4 
                className={styles.icon}
                size={40} 
                onClick={ () => {setOpen(!open)}}
            />
            {open && <CartMenu cart={cart} onRemove={onRemove} />}
        </div>
    )
}

export default CartButton;