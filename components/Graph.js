import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Sidemenu.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function Graph({ data }) {
  return (
    <LineChart width={600} height={200}>
      <CartesianGrid strokeDasharray="10 10"></CartesianGrid>
      <XAxis type="number" dataKey="id" domain={[0, 1000]}></XAxis>
      <YAxis></YAxis>
      <Legend></Legend>
      <Line
        type="monotone"
        dataKey="value"
        stroke="black"
        data={data}
        dot={false}
      ></Line>
    </LineChart>
  );
}
