import Image from "next/image";
import styles from "./CartOption.module.css";

const CartOption = () => {
    return (
        <div className={styles.option}>
            <Image src={`/products/V.jpg`} width={62} height={74}/>
            <div className={styles.info}>
                <h3 className={styles.title}>Grand Theft Auto</h3>
                <h3 className={styles.price}>R$99,90</h3>
                <p className={styles.remove}>remover</p>
            </div>
        </div>
    )
}

export default CartOption;