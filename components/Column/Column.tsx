import { FC } from "react";
import styles from "./styles.module.css";

interface ColumnProps {
  colorBackground: boolean;
}

const Column: FC<ColumnProps> = ({ colorBackground }) => {
  return (
    <div
      style={{ backgroundColor: colorBackground ? "#000" : "#fff" }}
      className={styles.column}
    ></div>
  );
};

export default Column;
