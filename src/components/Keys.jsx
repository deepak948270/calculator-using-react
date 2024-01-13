import React from "react";
import Key from "./key";
import styles from "../styles/Keys.module.css";

const Keys = ({ onButtonClick }) => {
  let buttons = [
    "c",
    "1",
    "2",
    "-",
    "3",
    "4",
    "+",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={styles.keysContainer}>
      {buttons.map((button) => (
        <Key key={button} button={button} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
};

export default Keys;
