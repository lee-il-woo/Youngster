import React from "react";
import styles from "./SidebarMenu.module.css";
import { Link } from "react-router-dom";
import { SlPresent } from "react-icons/sl";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function SidebarMenu() {
  const isOpen = useSelector((state) => state.menu.isOpen);

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      {/* //기본적으로 메뉴 스타일이 적용되고 조건부로 isOpne이 true 일 때 오픈 스타일도 적용이 됨 */}
      <Link to="/" className={styles.linkbutton}>
        <div>메뉴</div>
      </Link>
      <Link to="/item/list" className={styles.linkbutton}>
        <div>상품 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
      <Link to="/bookmark" className={styles.linkbutton}>
        <div>북마크 페이지</div>
      </Link>
    </div>
  );
}
