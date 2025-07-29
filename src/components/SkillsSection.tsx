// SkillsSection.tsx
import React, { useState } from "react";
import { ResumeData } from "../types";
import { labels } from "../data/lang";

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  lang: "en" | "fr";
}

const SkillsSection: React.FC<Props> = ({ data, setData, lang }) => {
  const t = labels[lang];
  const [currentSkill, setCurrentSkill] = useState("");

  const addSkill = () => {
    if (currentSkill.trim()) {
      setData({
        ...data,
        skills: [...data.skills, currentSkill.trim()]
      });
      setCurrentSkill("");
    }
  };

  const removeSkill = (index: number) => {
    const updated = [...data.skills];
    updated.splice(index, 1);
    setData({ ...data, skills: updated });
  };

  return (
    <div>
      <h3>{t.skills}</h3>
      <div>
        <textarea
          rows={2}
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
          placeholder={lang === "fr" ? "Tapez une compétence et appuyez sur Entrée" : "Type a skill and press Enter"}
        />
      </div>
      <ul>
        {data.skills.map((skill, i) => (
          <li key={i}>
            {skill}
            <button onClick={() => removeSkill(i)} style={{ marginLeft: "0.5rem" }}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
