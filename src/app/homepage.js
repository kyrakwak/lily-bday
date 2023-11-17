import Image from "next/image";
import styles from "./page.module.css";

export default function Homepage({ handlePageNav }) {
  return (
    <div className={styles.center}>
      <h1>happy birthday lily !!!</h1>
      <Image
        src="/Thumbnails_Easter+Lily.png"
        alt="lily"
        height={400}
        width={400}
        priority
      />
      <h2 className={styles.clickhere} onClick={() => handlePageNav("msg")}>
        click here to enter
      </h2>
    </div>
  );
}
