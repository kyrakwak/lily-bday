import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Gift({ handlePageNav }) {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 3) {
      const navTimeout = setTimeout(() => {
        handlePageNav("final");
      }, 2000);
      return () => clearTimeout(navTimeout);
    }
  }, [clickCount, handlePageNav]);

  const handleClickCount = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <div className={styles.center}>
        <h2>now click the gift to unwrap it...</h2>
        <Image
          src="/660486.png"
          alt="gift"
          width={500}
          height={500}
          style={{ cursor: "pointer" }}
          onClick={handleClickCount}
        />
      </div>
      {clickCount === 1 && (
        <span className={styles.clickone}>click again...</span>
      )}
      {clickCount === 2 && (
        <span className={styles.clicktwo}>click again, SORRY!</span>
      )}
      {clickCount === 3 && (
        <div className={styles.success} style={{ color: "black" }}>
          <div>ok fine...</div>
        </div>
      )}
    </div>
  );
}
