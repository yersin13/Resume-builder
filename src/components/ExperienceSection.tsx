// ExperienceSection.tsx
import React from "react";
import styles from "../styles/FormSection.module.css";
import { ResumeData, ExperienceItem } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const ExperienceSection: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];

  const handleChange = (index: number, field: keyof ExperienceItem, value: any) => {
    const updated = [...data.experience];
    (updated[index] as any)[field] = value;
    setData({ ...data, experience: updated });
  };

  const addExperience = () => {
    setData({
      ...data,
      experience: [
        ...data.experience,
        { jobTitle: "", company: "", location: "", startDate: "", endDate: "", description: [""] }
      ]
    });
  };

  const removeExperience = (index: number) => {
    const updated = data.experience.filter((_, i) => i !== index);
    setData({ ...data, experience: updated });
  };

  const lastIndex = data.experience.length - 1;

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>{t.experience}</h3>

      {data.experience.map((exp, i) => (
        i === lastIndex ? (
          <div key={i} className={styles.entryGroup}>
            <label className={styles.label}>{t.jobTitle}</label>
            <input className={styles.input} value={exp.jobTitle} onChange={(e) => handleChange(i, "jobTitle", e.target.value)} />

            <label className={styles.label}>{t.company}</label>
            <input className={styles.input} value={exp.company} onChange={(e) => handleChange(i, "company", e.target.value)} />

            <label className={styles.label}>{t.location}</label>
            <input className={styles.input} value={exp.location} onChange={(e) => handleChange(i, "location", e.target.value)} />

            <label className={styles.label}>{t.startDate}</label>
            <input className={styles.input} type="month" value={exp.startDate} onChange={(e) => handleChange(i, "startDate", e.target.value)} />

            <label className={styles.label}>{t.endDate}</label>
            <input className={styles.input} type="month" value={exp.endDate} onChange={(e) => handleChange(i, "endDate", e.target.value)} />

            <label className={styles.label}>{t.description}</label>
            <textarea
              className={styles.textarea}
              value={exp.description.join("\n")}
              onChange={(e) => handleChange(i, "description", e.target.value.split("\n"))}
            />

            <button onClick={() => removeExperience(i)} className={styles.removeButton}>🗑 Remove</button>
          </div>
        ) : null
      ))}

      <button onClick={addExperience} className={styles.addButton}>➕ Add Experience</button>
    </div>
  );
};

export default ExperienceSection;
