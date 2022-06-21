import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";
import InfoCard from "../components/InfoCard";
import React, { useState, useEffect, useRef } from "react";
import Graph from "../components/Graph";

var mqtt = require("mqtt");

var options = {
  protocolo: "mqtts",
  username: "hickoryvole481",
  password: "F2eNAgQ7878NuTvd",
  client_id: "johan_user",
};
var cont = 0;
export default function Home() {
  const [hum_val, sethumval] = useState("");
  const [temperatura_val, settemperaturaval] = useState("");
  const [PM1_val, setPM1val] = useState("");
  const [PM25_val, setPM25val] = useState("");
  const [PM10_val, setPM10val] = useState("");
  //data grafica
  const [data, setdata] = useState([{ id: 0, value: 0 }]);

  let hum_ref = useRef("");
  hum_ref.current = data;
  useEffect(() => {
    var client = mqtt.connect(
      "mqtts://hickoryvole481.cloud.shiftr.io",
      options
    );
    client.subscribe("medidor1/#");
    var note;
    client.on("message", function (topic, message) {
      note = message.toString();

      if (topic === "medidor1/humedad") {
        sethumval(note);
        cont = cont + 1;
        setdata((data) => [...data, { id: cont, value: note }]);
      } else if (topic === "medidor1/temperatura") {
        settemperaturaval(note);
      } else if (topic === "medidor1/PM1") {
        setPM1val(note);
      } else if (topic === "medidor1/PM25") {
        setPM25val(note);
      } else if (topic === "medidor1/PM10") {
        setPM10val(note);
      }
    });
  }, []);

  const [show_cm, setshow_cm] = useState(false);

  // const data = [
  //   { id: 0, value: 120, units: "corriente" },
  //   { id: 1, value: 30, units: "corriente" },
  //   { id: 3, value: 60, units: "corriente" },
  // ];

  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>
      <Head>
        <title>IOT EIA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {show_cm && (
          <InfoCard
            topics={"CM - Robledo"}
            value={temperatura_val}
            hr={hum_val}
            pm1={"PM1=" + PM1_val}
            pm25={"PM2.5=" + PM25_val}
            pm10={"PM10=" + PM10_val}
          ></InfoCard>
        )}

        <div
          className={
            PM25_val < 13
              ? styles.icon_box_hubspot_normal
              : PM25_val > 12 && PM25_val < 38
              ? styles.icon_box_hubspot_moderado
              : PM25_val > 37 && PM25_val < 56
              ? styles.icon_box_hubspot_dañinags
              : PM25_val > 56 && PM25_val < 151
              ? styles.icon_box_hubspot_dañina
              : PM25_val > 150 && PM25_val < 251
              ? styles.icon_box_hubspot_muydañina
              : PM25_val > 250 && PM25_val < 5001
              ? styles.icon_box_hubspot_peligro
              : styles.icon_box_hubspot_alert
          }
          onClick={() => setshow_cm(!show_cm)}
        ></div>
        <img
          src="./Screenshot_1.jpg"
          alt="mapa"
          className={styles.img_map}
        ></img>
        {/* <Graph data={data}></Graph> */}
      </main>
    </div>
  );
}
