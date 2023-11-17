import styles from "./page.module.css";

export default function Message({ handlePageNav }) {
  return (
    <div className={styles.center}>
      <h2>I wanted to get you a virtual present</h2>
      <h2>but to present it</h2>
      <h2>I thought I&apos;d make a little site...</h2>
      <h2
        className={styles.clickhere}
        onClick={() => handlePageNav("acrostic")}
      >
        next {">"}
      </h2>
    </div>
  );
}
