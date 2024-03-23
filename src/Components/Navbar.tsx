import { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [hasLogged, setHasLogged] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    updateStyle();
  };

  const updateStyle = () => {
    if (window.innerWidth >= 700 && !hasLogged) {
      setIsClicked(false);
      setHasLogged(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateStyle);

    return () => {
      window.removeEventListener("resize", updateStyle);
    };
  }, []);

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src="../src/assets/TanamLogo.png" alt="Logo" />
      </div>
      <div className={style.rightGroup}>
        <div className={`${style.menus} ${isClicked ? style.openMenus : ""}`}>
          <a href="#">Home</a>
          <a href="#">Disain taman</a>
          <a href="#">Pesanan saya</a>
        </div>
        <button
          onClick={handleButtonClick}
          className={`${style.FaTimes} ${isClicked ? style.openFaTimes : ""}`}
        >
          <FaTimes />
        </button>
        <button
          onClick={handleButtonClick}
          className={`${style.FaBars} ${isClicked ? style.openFaBars : ""}`}
        >
          <FaBars />
        </button>
        <div className={`${style.avatar} ${isClicked ? style.openAvatar : ""}`}>
          <img src="../src/assets/Avatar.png" alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
