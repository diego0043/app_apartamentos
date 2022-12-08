import React from "react";
import ReactDOM from "react-dom/client";
import styles from "../styles.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const Home = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/private_files/lf30_ghysqmiq.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </>
  );
};
