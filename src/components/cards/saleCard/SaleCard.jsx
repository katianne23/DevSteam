import Image from "next/image";

import styles from "./SaleCard.module.css";
import Button from "@/components/forms/button/Button";

const SaleCard = ({ image, discount, fullPrice, discountPrice, onAdd }) => {
  return (
      <div className={styles.salecard}>
        <Image src={`/products/${image}`} alt={image} width={250} height={300}  />
        <div className={styles.info}>
            <h3 className={styles.title}>Ofertas Exclusiva</h3>
            <div className={styles.pricecard}>
                <div className={styles.percent}>-{discount}</div>
                <div className={styles.price}>
                    <p className={styles.fullprice}>{fullPrice}</p>
                    <h4 className={styles.discountprice}>{discountPrice}</h4>
                </div>
            </div>
            <Button onClick={onAdd} fullWidth>Adicionar ao carrinho</Button>
        </div>
      </div>

  );
};

export default SaleCard;
