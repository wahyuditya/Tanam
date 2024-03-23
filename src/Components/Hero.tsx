import style from "./Hero.module.css";

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.leftGroup}>
        <div className={style.tagLine}>
          <h1>Ciptakan ruang hijau, ciptakan ketenangan</h1>
          <img src="../src/assets/Decorative.png" alt="" />
        </div>
        <div className={style.description}>
          <p>
            Ciptakan keseimbangan yang indah antara alam dan diri kamu dengan
            desain taman yang penuh inspirasi. Kita siap membantu kamu
            menciptakan ketenangan yang indah menjadi kenyataan.
          </p>
        </div>
        <div className={style.cta}>
          <button className={style.paket}>Pilih paket</button>
          <button className={style.portfolio}>
            Portfolio
            <img src="../src/assets/arrow_forward.png" />
          </button>
        </div>
      </div>
      <div className={style.rightGroup}>
        <img src="../src/assets/Hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
