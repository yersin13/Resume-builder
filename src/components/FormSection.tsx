import React from "react";
import { labels } from "../data/lang";
import { ResumeData, ExperienceItem, EducationItem, CertificateItem } from "../types";
import styles from "../styles/FormSection.module.css";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const FormSection: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];

  const handleChange = (field: keyof ResumeData, value: any) => {
    setData({ ...data, [field]: value });
  };

  const handleExperienceChange = (index: number, field: keyof ExperienceItem, value: any) => {
    const updated = [...data.experience];
    (updated[index] as any)[field] = value;
    setData({ ...data, experience: updated });
  };

 const handleEducationChange = (index: number, field: keyof EducationItem, value: any) => {
  const updated = [...data.education];
  (updated[index] as any)[field] = value;
  setData({ ...data, education: updated });
};

const handleCertificateChange = (index: number, field: keyof CertificateItem, value: any) => {
  const updated = [...data.certificates];
  (updated[index] as any)[field] = value;
  setData({ ...data, certificates: updated });
};
return (
  <div className={styles.formContainer}>
    <label className={styles.label}>{t.name}</label>
    <input className={styles.input} value={data.name} onChange={(e) => handleChange("name", e.target.value)} />

    <label className={styles.label}>{t.email}</label>
    <input className={styles.input} value={data.email} onChange={(e) => handleChange("email", e.target.value)} />

    <label className={styles.label}>{t.phone}</label>
    <input className={styles.input} value={data.phone} onChange={(e) => handleChange("phone", e.target.value)} />

    <label className={styles.label}>{t.summary}</label>
    <textarea className={styles.textarea} value={data.summary} onChange={(e) => handleChange("summary", e.target.value)} />

    <label className={styles.label}>{t.skills}</label>
    <input
      className={styles.input}
      value={data.skills.join(", ")}
      onChange={(e) => handleChange("skills", e.target.value.split(",").map((s) => s.trim()))}
      placeholder="JavaScript, SQL, React"
    />

    <h3 className={styles.sectionTitle}>{t.experience}</h3>
    {data.experience.map((exp, i) => (
      <div key={i} className={styles.entryGroup}>
        <label className={styles.label}>{t.jobTitle}</label>
        <input className={styles.input} value={exp.jobTitle} onChange={(e) => handleExperienceChange(i, "jobTitle", e.target.value)} />

        <label className={styles.label}>{t.company}</label>
        <input className={styles.input} value={exp.company} onChange={(e) => handleExperienceChange(i, "company", e.target.value)} />

        <label className={styles.label}>{t.location}</label>
        <input className={styles.input} value={exp.location} onChange={(e) => handleExperienceChange(i, "location", e.target.value)} />

        <label className={styles.label}>{t.startDate}</label>
        <input className={styles.input} type="month" value={exp.startDate} onChange={(e) => handleExperienceChange(i, "startDate", e.target.value)} />

        <label className={styles.label}>{t.endDate}</label>
        <input className={styles.input} type="month" value={exp.endDate} onChange={(e) => handleExperienceChange(i, "endDate", e.target.value)} />

        <label className={styles.label}>{t.description}</label>
        <textarea
          className={styles.textarea}
          value={exp.description.join("\n")}
          onChange={(e) => handleExperienceChange(i, "description", e.target.value.split("\n"))}
        />
      </div>
    ))}

    <h3 className={styles.sectionTitle}>{t.education}</h3>
    {data.education.map((edu, i) => (
      <div key={i} className={styles.entryGroup}>
        <label className={styles.label}>{t.degree}</label>
        <input className={styles.input} value={edu.degree} onChange={(e) => handleEducationChange(i, "degree", e.target.value)} />

        <label className={styles.label}>{t.school}</label>
        <input className={styles.input} value={edu.school} onChange={(e) => handleEducationChange(i, "school", e.target.value)} />

        <label className={styles.label}>{t.startDate}</label>
        <input className={styles.input} type="month" value={edu.startDate} onChange={(e) => handleEducationChange(i, "startDate", e.target.value)} />

        <label className={styles.label}>{t.endDate}</label>
        <input className={styles.input} type="month" value={edu.endDate} onChange={(e) => handleEducationChange(i, "endDate", e.target.value)} />

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={edu.isCurrent}
            onChange={(e) => handleEducationChange(i, "isCurrent", e.target.checked)}
          />
          {t.current}
        </label>
      </div>
    ))}

    <h3 className={styles.sectionTitle}>{t.certificates}</h3>
    {data.certificates.map((cert, i) => (
      <div key={i} className={styles.entryGroup}>
        <label className={styles.label}>{t.certificateName}</label>
        <input className={styles.input} value={cert.name} onChange={(e) => handleCertificateChange(i, "name", e.target.value)} />

        <label className={styles.label}>{t.dateObtained}</label>
        <input className={styles.input} type="month" value={cert.dateObtained} onChange={(e) => handleCertificateChange(i, "dateObtained", e.target.value)} />

        <label className={styles.label}>{t.comment}</label>
        <input className={styles.input} value={cert.comment} onChange={(e) => handleCertificateChange(i, "comment", e.target.value)} />
      </div>
    ))}

    <h3 className={styles.sectionTitle}>{t.languages}</h3>
    <input
      className={styles.input}
      value={data.languages.join(", ")}
      onChange={(e) => handleChange("languages", e.target.value.split(",").map((l) => l.trim()))}
      placeholder="English, French, Spanish"
    />

    <h3 className={styles.sectionTitle}>{t.interests}</h3>
    <input
      className={styles.input}
      value={data.interests.join(", ")}
      onChange={(e) => handleChange("interests", e.target.value.split(",").map((i) => i.trim()))}
      placeholder="Reading, Music, Cycling"
    />

    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={data.includeReferences}
        onChange={(e) => handleChange("includeReferences", e.target.checked)}
      />
      {t.includeReferences}
    </label>
  </div>
);

};

export default FormSection;
