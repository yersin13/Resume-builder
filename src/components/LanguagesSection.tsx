import React from "react";
import styles from "../styles/FormSection.module.css";
import { ResumeData } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const LanguagesSection: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];

  const handleChange = (value: string) => {
    setData({ ...data, languages: value.split(",").map((l) => l.trim()) });
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>{t.languages}</h3>
      <input
        className={styles.input}
        value={data.languages.join(", ")}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="English, French, Spanish"
      />
    </div>
  );
};

export default LanguagesSection;