import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuSlide } from "../animation";
import Curve from "./Curve";
import Footer from "./Footer";
import Link from "./Link";
import styles from "./style.module.scss";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Villa",
    href: "/#villa",
  },
  {
    title: "Dich Vu",
    href: "/#services",
  },
  {
    title: "Dat Phong",
    href: "/#booking",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
