import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Sidemenu.module.css";
import { RiTempHotFill } from "react-icons/Ri";
import { WiHumidity } from "react-icons/Wi";
import { GiMatterStates } from "react-icons/Gi";

export default function InfoCard(props) {
  return (
    <div className={styles.card_container}>
      <div className={styles.dot_value}>{props?.topics}</div>
      <div className={styles.row_card}>
        <RiTempHotFill
          className={styles.card_icon}
          onClick={() => router.push("/")}
        ></RiTempHotFill>
        <div className={styles.dot_value}>{props?.value}</div>
      </div>
      <div className={styles.row_card}>
        <WiHumidity
          className={styles.card_icon}
          onClick={() => router.push("/")}
        ></WiHumidity>
        <div className={styles.dot_value}>{props?.hr}</div>
      </div>
      <div className={styles.row_card}>
        <GiMatterStates
          className={styles.card_icon}
          onClick={() => router.push("/")}
        ></GiMatterStates>
        <div className={styles.dot_value}>{props?.pm1}</div>
      </div>
      <div className={styles.row_card}>
        <GiMatterStates
          className={styles.card_icon}
          onClick={() => router.push("/")}
        ></GiMatterStates>
        <div className={styles.dot_value}>{props?.pm25}</div>
      </div>
      <div className={styles.row_card}>
        <GiMatterStates
          className={styles.card_icon}
          onClick={() => router.push("/")}
        ></GiMatterStates>
        <div className={styles.dot_value}>{props?.pm10}</div>
      </div>
    </div>
  );
}
