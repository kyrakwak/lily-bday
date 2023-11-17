import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Acrostic({ handlePageNav }) {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (selectedLetters.join("") === "LILY") {
      setShowSuccess(true);
      const navTimeout = setTimeout(() => {
        handlePageNav("gift");
      }, 2000);
      return () => clearTimeout(navTimeout);
    }
  }, [selectedLetters, handlePageNav]);

  const handleAddLetter = letter => {
    setSelectedLetters([...selectedLetters, letter]);
  };

  const handleClearLetters = () => {
    setSelectedLetters([]);
  };

  const letters = [
    "K",
    "Q",
    "I",
    "E",
    "Y",
    "R",
    "B",
    "A",
    "L",
    "C",
    "V",
    "S",
    "X",
    "M",
    "J",
    "F"
  ];

  return (
    <div>
      <div className={styles.center}>
        <h2>spell your name to proceed</h2>
        <div className={styles.grid}>
          {letters.map((l, i) => (
            <div key={i} onClick={() => handleAddLetter(l)}>
              {l}
            </div>
          ))}
        </div>
        <div style={{ fontStyle: "italic" }}>letters selected:</div>
        <div className={styles.letterBox}>
          {selectedLetters.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
        <div className={styles.clearLetters} onClick={handleClearLetters}>
          clear letters
        </div>
      </div>
      {showSuccess && (
        <div className={styles.success}>
          <div>nice!</div>
        </div>
      )}
    </div>
  );
}
