import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Final({ handlePageNav }) {
  return (
    <div className={styles.center}>
      <h3 style={{ marginBottom: "20px" }}>
        your gift is a gift card from ORA-C!{" "}
        <a
          href="https://checkout.shopify.com/gift_cards/2776137779/c04eca876eb835a3ada92a3249ea6207"
          target="_blank"
          className={styles.clickhere}
          style={{ textDecoration: "none", fontSize: "18px" }}
        >
          link
        </a>
      </h3>
      <h3>
        I wanted to pick something for you, but I wasn{"'"}t sure what you
        {"'"}d actually wear
      </h3>
      <h3>
        so I thought it would be better to let you pick something out yourself.
      </h3>
      <h3 style={{ marginBottom: "20px" }}>
        I love you lily, and I{"'"}m so happy to be your friend!
      </h3>
      <h3 style={{ fontStyle: "italic", marginBottom: "20px" }}>
        love, kyra {"<3"}
      </h3>
      <h4 className={styles.clickhere} onClick={() => handlePageNav("home")}>
        return to start
      </h4>
    </div>
  );
}
