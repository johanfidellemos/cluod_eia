import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";
import GaugeChart from "react-gauge-chart";

export default function Devices() {
  const [PM25_prom_1, setPM25_prom_1] = useState("");
  const [PM25_prom_2, setPM25_prom_2] = useState("");
  const [PM10_prom_1, setPM10_prom_1] = useState("");
  const [PM10_prom_2, setPM10_prom_2] = useState("");
  const [Temperatura_prom_1, setTemperatura_prom_1] = useState("");
  const [Temperatura_prom_2, setTemperatura_prom_2] = useState("");
  const [Humedad_prom_1, setHumedad_prom_1] = useState("");
  //medidor1 pm 2.5

  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>

      <main className={styles.main}>DEVICES</main>
    </div>
  );
}
