import React, { ReactElement } from "react";
import styles from "../styles/Grid.module.scss";

const Cell = ({}): ReactElement => {
  return <div className={styles.cell}></div>;
};

export const Grid = ({}): ReactElement => {
  return <div className={styles.grid}>
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell />
  </div>;
};
