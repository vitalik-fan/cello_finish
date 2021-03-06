import styles from "./Menu.module.sass";
import Image from "next/image";
import menuBg from "../../public/assets/img/Menu/menuBg1.jpg";
import menuBgIpad from "../../public/assets/img/Menu/ipadMenuBg.jpg";
import menuBgMob from "../../public/assets/img/Menu/menuBgMob.jpg";
import menuBgPc from "../../public/assets/img/Menu/menuBgPC.jpg";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SotialIconFooter from "../SotialIconFooter/SotialIconFooter";
import { v4 as uuidv4 } from "uuid";
import { footerMenu, sotials } from "../../hoc/Footer/Footer";
import useWindowWidth from "react-hook-use-window-width";
import { useEffect, useState } from "react";
import { listItem, fadeIn, scale } from "../../motions/menuMotion";
import useTypedSelector from "../../hooks/useTypedSelector";

interface IMenu {
  isMenuOpen: boolean;
  setMenuOpen: any;
}

const Menu = ({ isMenuOpen, setMenuOpen }: IMenu) => {
  const [bgImage, setBgImage] = useState<string>(menuBg.src);
  const lang = useTypedSelector((state) => state.app.language);

  const width = useWindowWidth();
  useEffect(() => {
    if (width > 1355) {
      setBgImage(menuBg.src);
    } else if (width <= 1366 && width > 1200) {
      setBgImage(menuBgPc.src);
    } else if (width <= 1200 && width > 576) {
      setBgImage(menuBgIpad.src);
    } else if (width <= 576) {
      setBgImage(menuBgMob.src);
    }
  }, [width]);

  const clickMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <AnimatePresence initial={false}>
      {isMenuOpen && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={styles.Menu}
        >
          <motion.div variants={scale} className={styles.bgImage}>
            <Image src={bgImage} alt="menuBg" layout={"fill"} />
          </motion.div>
          <ul className={styles.menuItems}>
            {footerMenu.map((menuItem: any, index: number) => (
              <motion.li
                onClick={clickMenuHandler}
                key={"menuItems " + index}
                variants={listItem}
                custom={index}
                className={styles.menuItem}
              >
                <Link href={menuItem.link}>
                  <a>{menuItem[`title${lang}`]}</a>
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="container">
            <div className={styles.socials}>
              {sotials.map((sotial, index) => (
                <SotialIconFooter
                  link={sotial.link}
                  key={uuidv4() + index}
                  icon={sotial.icon}
                  active={sotial.active}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
