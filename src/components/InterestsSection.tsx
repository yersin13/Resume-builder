import React from "react";
import styles from "../styles/FormSection.module.css";
import { ResumeData } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const InterestsSection: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];

  const handleChange = (value: string) => {
    setData({ ...data, interests: value.split(",").map((i) => i.trim()) });
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>{t.interests}</h3>
      <input
        className={styles.input}
        value={data.interests.join(", ")}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Reading, Music, Hiking"
      />
    </div>
  );
};

export default InterestsSection;