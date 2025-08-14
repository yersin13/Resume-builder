import React from "react";
import styles from "../styles/PreviewSection.module.css";
import { ResumeData } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  lang: "en" | "fr";
  template: "modern" | "minimalist" | "creative" | "elegant" | "corporate" | "bold";
  onEditSection?: (step: number, index?: number) => void;
  onRemoveItem?: (section: keyof ResumeData, index: number) => void;
}

const ResumePreview: React.FC<Props> = ({ data, lang, template, onEditSection, onRemoveItem }) => {
  const t = labels[lang];

  const isNotEmpty = (value: any) => {
    if (Array.isArray(value)) return value.length > 0;
    return value !== "" && value !== null && value !== undefined;
  };

  const isModern = template === "modern";

  return (
    <div className={styles.paperWrapper}>
      <div className={`${styles.previewContainer} ${styles[template]}`}>
        {/* Header Section for Modern Layout */}
        {isModern ? (
          <div className={styles.modernHeader}>
            <h2>{data.name}</h2>
            <div className="contact-info">{data.email} | {data.phone} </div>
          </div>
        ) : null}

        {/* Two-Column Layout for Modern */}
        {isModern ? (
          <div className={styles.modernGrid}>
            {/* Left Column */}
            <div className={styles.modernLeft}>
              {/* Skills */}
              {data.skills.filter(Boolean).length > 0 && (
                <div className={styles.previewBlock}>
                  <h3>{t.skills || "Skills"}</h3>
                  <ul className={styles.twoColumnList}>
                    {data.skills.map((skill, i) => (
                      skill && (
                        <li key={i} className={styles.entryItem}>
                          {skill}
                          <div className={styles.inlineButtons}>
                            <button onClick={() => onEditSection?.(6, i)}>✏️</button>
                            <button onClick={() => onRemoveItem?.("skills", i)}>🗑</button>
                          </div>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}

              {/* Languages */}
              {data.languages.filter(Boolean).length > 0 && (
                <div className={styles.previewBlock}>
                  <h3>{t.languages}</h3>
                  <div className={styles.twoColumnList}>
                    {data.languages.map((langItem, i) => (
                      langItem && (
                        <div key={i} className={styles.twoColumnItem}>
                          <p>{langItem}</p>
                          <div className={styles.inlineButtons}>
                            <button onClick={() => onEditSection?.(4, i)}>✏️</button>
                            <button onClick={() => onRemoveItem?.("languages", i)}>🗑</button>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Interests */}
              {data.interests.filter(Boolean).length > 0 && (
                <div className={styles.previewBlock}>
                  <h3>{t.interests}</h3>
                  {data.interests.map((interest, i) => (
                    interest && (
                      <div key={i} className={styles.entryItem}>
                        <p>{interest}</p>
                        <div className={styles.inlineButtons}>
                          <button onClick={() => onEditSection?.(5, i)}>✏️</button>
                          <button onClick={() => onRemoveItem?.("interests", i)}>🗑</button>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}

              {/* Certificates */}
              {data.certificates.filter(cert => cert.name).length > 0 && (
                <div className={styles.previewBlock}>
                  <h3>{t.certificates}</h3>
                  {data.certificates.map((cert, i) => (
                    cert.name && (
                      <div key={i} className={styles.entryItem}>
                        {cert.name} – {cert.dateObtained} <em>({cert.comment})</em>
                        <div className={styles.inlineButtons}>
                          <button onClick={() => onEditSection?.(3, i)}>✏️</button>
                          <button onClick={() => onRemoveItem?.("certificates", i)}>🗑</button>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}

              {/* Education */}
              {data.education.filter(edu => edu.degree || edu.school).length > 0 && (
                <div className={styles.previewBlock}>
                  <h3>{t.education}</h3>
                  {data.education.map((edu, i) => (
                    (edu.degree || edu.school) && (
                      <div key={i} className={styles.entryItem}>
                        <strong>{edu.degree}</strong> – {edu.school} ({edu.startDate} to {edu.isCurrent ? t.current : edu.endDate})
                        <div className={styles.inlineButtons}>
                          <button onClick={() => onEditSection?.(2, i)}>✏️</button>
                          <button onClick={() => onRemoveItem?.("education", i)}>🗑</button>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className={styles.modernRight}>
              {/* Summary */}
              {isNotEmpty(data.summary) && (
                <div className={styles.previewBlock}>
                  <h3>{t.summary}</h3>
                  <p>{data.summary}</p>
                </div>
              )}

              {/* Experience */}
              {data.experience.filter(exp => exp.jobTitle || exp.company || exp.startDate || exp.endDate).length > 0 && (
                <div className={styles.previewBlock}>
                  <h3>{t.experience}</h3>
                  {data.experience.map((exp, i) => (
                    (exp.jobTitle || exp.company || exp.startDate || exp.endDate) && (
                      <div key={i} className={styles.entryItem}>
                        <strong>{exp.jobTitle}</strong> – {exp.company} ({exp.startDate} to {exp.endDate})<br />
                        <em>{exp.location}</em>
                        <ul>
                          {exp.description.map((line, j) => (
                            <li key={j}>{line}</li>
                          ))}
                        </ul>
                        <div className={styles.inlineButtons}>
                          <button onClick={() => onEditSection?.(1, i)}>✏️</button>
                          <button onClick={() => onRemoveItem?.("experience", i)}>🗑</button>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}

              {/* References */}
              {data.includeReferences && (
                <div className={styles.previewBlock}>
                  <h3>{t.includeReferences}</h3>
                  <p>{lang === "en" ? "Available upon request." : "Disponibles sur demande."}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Default (non-modern) layout fallback here if needed
          <div className={styles.previewBlock}>
            {/* fallback content or layout */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
