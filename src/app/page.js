"use client";
import { useState } from "react";
import Homepage from "./homepage";
import Message from "./message";
import Acrostic from "./acrostic";
import Gift from "./gift";
import Final from "./final";
import styles from "./page.module.css";

export default function Home() {
  const [page, setPage] = useState("home");

  const handlePageNav = page => {
    setPage(page);
  };

  let componentToShow = null;

  switch (page) {
    case "home":
      componentToShow = <Homepage handlePageNav={handlePageNav} />;
      break;
    case "msg":
      componentToShow = <Message handlePageNav={handlePageNav} />;
      break;
    case "acrostic":
      componentToShow = <Acrostic handlePageNav={handlePageNav} />;
      break;
    case "gift":
      componentToShow = <Gift handlePageNav={handlePageNav} />;
      break;
    case "final":
      componentToShow = <Final handlePageNav={handlePageNav} />;
      break;
    default:
      break;
  }

  return <main className={styles.main}>{componentToShow}</main>;
}
