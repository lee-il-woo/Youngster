import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/slices/menuSlice";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

export default function Header() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        dispatch(toggleMenu());
      }
    };
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [dispatch, isOpen]);

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(toggleMenu());
  };

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <Link to="/" className={styles.logoLink}>
          <img src="../images/friend.png" />
          <span>YOUNGSTER</span>
        </Link>
      </div>
      <GiHamburgerMenu className={styles.menuIcon} onClick={handleClick} />
      <SidebarMenu />
    </header>
  );
}
