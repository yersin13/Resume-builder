// Example: components/PersonalInfo.tsx
import React from "react";
import styles from "../styles/FormSection.module.css";
import { ResumeData } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const PersonalInfo: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];

  const handleChange = (field: keyof ResumeData, value: any) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className={styles.formContainer}>
      <label className={styles.label}>{t.name}</label>
      <input
        className={styles.input}
        value={data.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <label className={styles.label}>{t.email}</label>
      <input
        className={styles.input}
        value={data.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <label className={styles.label}>{t.phone}</label>
      <input
        className={styles.input}
        value={data.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <label className={styles.label}>{t.summary}</label>
      <textarea
        className={styles.textarea}
        value={data.summary}
        onChange={(e) => handleChange("summary", e.target.value)}
      />

      {/* <label className={styles.label}>{t.skills}</label>
      <input
        className={styles.input}
        value={data.skills.join(", ")}
        onChange={(e) => handleChange("skills", e.target.value.split(",").map((s) => s.trim()))}
        placeholder="JavaScript, SQL, React"
      /> */}
    </div>
  );
};

export default PersonalInfo;