import CartOption from "../cartOption/CartOption";
import style from "./Cart.module.css";
import Button from "../forms/button/Button";

const CartMenu = ( { cart, onRemove } ) => {
  const handleSubmit =  () => {
    alert("Comprar Realizada com Sucesso!!")
  }
  return (
    <div className={style.menu}>
      <div className={style.option}>
        {
          cart.length === 0 && <p>Nenhum produto no seu carinho.</p>
        }
        {
          cart.map((cartInfo, pos) => 
            <CartOption 
              image={cartInfo.image}
              title={cartInfo.name}
              price={cartInfo.price}
              onRemove={() => onRemove(pos)}
              key={`cart-info-${pos}`}
            />
          )
        }
      </div>
      <div className={style.priceline}>
        <h2>Total</h2>
        <h2 className={style.price}>R$ {
          cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}
        </h2>
      </div>
      <div className={style.button}>
      <Button onClick={handleSubmit}>Finalizar Comprar</Button>
      </div>
    </div>
  );
};

export default CartMenu;
