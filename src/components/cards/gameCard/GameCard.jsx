import Image from "next/image";
import styles from "./GameCard.module.css";
import Button from "@/components/forms/button/Button";

const GameCard = ({ image, title, category, price, onAdd}) => {
  return (
    <div className={styles.gameCard}>
      <Image className={styles.image} src={`/products/${image}`} alt={image} width={300} height={145} />
      <div className={styles.info}>
        <h3 className={styles.title }>{title}</h3>
        <p className={styles.category}>{category}</p>
        <div className={styles.pricing}>
          <h2 className={styles.price}>R${price}</h2>
          <Button onClick={onAdd}>Adcionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
