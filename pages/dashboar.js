import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidemenu from "../components/Sidemenu";

export default function Dashboard() {
  const [dots, setdots] = useState();
  const get_dots = () => {
    fetch("https://https://4484hp.deta.dev/dots", {
      method: "GET",
      headers: { "content.Type": "application/json" },
    }).then((response) => {
      if (response.status === 200) {
        return response.json().then((json_response) => {
          setdots(json_response);
          console.log(json_response);
          return false;
        });
      } else {
        alert("fallo");
      }
    });
  };
  useEffect(() => {
    get_dots();
  }, []);
  return (
    <div className={styles.container}>
      <Sidemenu></Sidemenu>

      <main className={styles.main}>Dashboard</main>
    </div>
  );
}
