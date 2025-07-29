// CertificatesSection.tsx
import React from "react";
import styles from "../styles/FormSection.module.css";
import { ResumeData, CertificateItem } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const CertificatesSection: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];

  const handleChange = (index: number, field: keyof CertificateItem, value: any) => {
    const updated = [...data.certificates];
    (updated[index] as any)[field] = value;
    setData({ ...data, certificates: updated });
  };

  const addCertificate = () => {
    setData({
      ...data,
      certificates: [
        ...data.certificates,
        { name: "", dateObtained: "", comment: "" }
      ]
    });
  };

  const removeCertificate = (index: number) => {
    const updated = data.certificates.filter((_, i) => i !== index);
    setData({ ...data, certificates: updated });
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>{t.certificates}</h3>

      {data.certificates.map((cert, i) => (
        <div key={i} className={styles.entryGroup}>
          <label className={styles.label}>{t.certificateName}</label>
          <input className={styles.input} value={cert.name} onChange={(e) => handleChange(i, "name", e.target.value)} />

          <label className={styles.label}>{t.dateObtained}</label>
          <input className={styles.input} type="month" value={cert.dateObtained} onChange={(e) => handleChange(i, "dateObtained", e.target.value)} />

          <label className={styles.label}>{t.comment}</label>
          <input className={styles.input} value={cert.comment} onChange={(e) => handleChange(i, "comment", e.target.value)} />

          <button onClick={() => removeCertificate(i)} className={styles.removeButton}>🗑 Remove</button>
        </div>
      ))}

      <button onClick={addCertificate} className={styles.addButton}>➕ Add Certificate</button>
    </div>
  );
};

export default CertificatesSection;
