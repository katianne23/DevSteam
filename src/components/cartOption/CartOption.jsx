import Image from "next/image";
import styles from "./CartOption.module.css";

const CartOption = ({ image, title, price, onRemove }) => {
    return (
        <div className={styles.option}>
            <Image className={styles.image} src={`/products/${image}`} alt={`{image}`} width={62} height={74}/>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.price}>R${price.toFixed(2)}</h3>
                <p className={styles.remove} onClick={onRemove}>remover</p>
            </div>
        </div>
    )
}

export default CartOption;