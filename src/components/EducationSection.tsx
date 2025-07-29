// EducationSection.tsx
import React from "react";
import styles from "../styles/FormSection.module.css";
import { ResumeData, EducationItem } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const EducationSection: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];

  const handleChange = (index: number, field: keyof EducationItem, value: any) => {
    const updated = [...data.education];
    (updated[index] as any)[field] = value;
    setData({ ...data, education: updated });
  };

  const addEducation = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        { degree: "", school: "", startDate: "", endDate: "", isCurrent: false }
      ]
    });
  };

  const removeEducation = (index: number) => {
    const updated = data.education.filter((_, i) => i !== index);
    setData({ ...data, education: updated });
  };

  const lastIndex = data.education.length - 1;

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>{t.education}</h3>

      {data.education.map((edu, i) => (
        i === lastIndex ? (
          <div key={i} className={styles.entryGroup}>
            <label className={styles.label}>{t.degree}</label>
            <input className={styles.input} value={edu.degree} onChange={(e) => handleChange(i, "degree", e.target.value)} />

            <label className={styles.label}>{t.school}</label>
            <input className={styles.input} value={edu.school} onChange={(e) => handleChange(i, "school", e.target.value)} />

            <label className={styles.label}>{t.startDate}</label>
            <input className={styles.input} type="month" value={edu.startDate} onChange={(e) => handleChange(i, "startDate", e.target.value)} />

            <label className={styles.label}>{t.endDate}</label>
            <input className={styles.input} type="month" value={edu.endDate} onChange={(e) => handleChange(i, "endDate", e.target.value)} />

            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={edu.isCurrent} onChange={(e) => handleChange(i, "isCurrent", e.target.checked)} />
              {t.current}
            </label>

            <button onClick={() => removeEducation(i)} className={styles.removeButton}>🗑 Remove</button>
          </div>
        ) : null
      ))}

      <button onClick={addEducation} className={styles.addButton}>➕ Add Education</button>
    </div>
  );
};

export default EducationSection;
