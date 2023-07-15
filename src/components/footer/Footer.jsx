import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.colum}>
            <p className={style.p}>Copyright &copy; 2023 - Katianne Araújo</p>
            <span className={style.span}>Pagina desenvolvida para fins didaticos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
