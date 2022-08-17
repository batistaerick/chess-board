import { FC } from "react";
import Column from "../Column/Column";
import styles from "./styles.module.css";

interface LineProps {
  black: boolean;
}

const Line: FC<LineProps> = ({ black }) => {
  return (
    <div className={styles.line}>
      <Column colorBackground={black} />
      <Column colorBackground={!black} />
      <Column colorBackground={black} />
      <Column colorBackground={!black} />
      <Column colorBackground={black} />
      <Column colorBackground={!black} />
      <Column colorBackground={black} />
      <Column colorBackground={!black} />
    </div>
  );
};
export default Line;
