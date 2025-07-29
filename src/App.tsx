// App.tsx
import React, { useState } from "react";
import styles from "./styles/App.module.css";
import { ResumeData } from "./types";
import { initialData } from "./data/demo";
import PersonalInfo from "./components/PersonalInfo";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificatesSection from "./components/CertificatesSection";
import LanguagesSection from "./components/LanguagesSection";
import InterestsSection from "./components/InterestsSection";
import SkillsSection from "./components/SkillsSection";
import ResumePreview from "./components/ResumePreview";


const steps = [
  "Personal Info",
  "Experience",
  "Education",
  "Certificates",
  "Languages",
  "Interests",
  "Skills",
  "Preview"
];

const App = () => {
  const [data, setData] = useState<ResumeData>(initialData);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [currentStep, setCurrentStep] = useState(0);
const [template, setTemplate] = useState<"modern" | "minimalist" | "creative" | "elegant" | "corporate" | "bold">("modern");

const [useMock, setUseMock] = useState(true);
// Temporary mock data for previewing templates
const tempData: ResumeData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "(555) 123-4567",
  summary: "Detail-oriented and passionate software developer with 5+ years of experience.",
  experience: [
    {
      jobTitle: "Frontend Developer",
      company: "TechCorp",
      location: "New York, NY",
      startDate: "2019-06",
      endDate: "2023-04",
      description: ["Built responsive React apps", "Led UI redesign for SaaS product"]
    }
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science",
      school: "State University",
      startDate: "2014-08",
      endDate: "2018-05",
      isCurrent: false
    }
  ],
  certificates: [
    { name: "Certified Web Developer", dateObtained: "2020-10", comment: "Issued by XYZ Institute" }
  ],
  languages: ["English", "Spanish"],
  interests: ["Hiking", "Photography"],
  skills: ["React", "TypeScript", "CSS Modules"],
  includeReferences: true,
  portfolio: ""
};
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.stepIndicator}>
        Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
      </div>
      <div className={styles.mainLayout}>
        <div className={styles.formSection}>
          {currentStep === 0 && <PersonalInfo data={data} setData={setData} lang={lang} />}
           {currentStep === 1 && <SkillsSection data={data} setData={setData} lang={lang} />}

          {currentStep === 2 && <ExperienceSection data={data} setData={setData} lang={lang} />}
          {currentStep === 3 && <EducationSection data={data} setData={setData} lang={lang} />}
          {currentStep === 4 && <CertificatesSection data={data} setData={setData} lang={lang} />}
          {currentStep === 5 && <LanguagesSection data={data} setData={setData} lang={lang} />}
          {currentStep === 6 && <InterestsSection data={data} setData={setData} lang={lang} />}
          {/* {currentStep === 7 && <SkillsSection data={data} setData={setData} lang={lang} />} */}
{currentStep === 7 && (
  <div>
    <h3>Edit a Section</h3>
    <ul className={styles.editMenuList}>
      {steps.slice(0, -1).map((stepLabel, index) => (
        <li key={index}>
          <button
            className={styles.editMenuButton}
            onClick={() => setCurrentStep(index)}
          >
             {stepLabel}
          </button>
        </li>
      ))}
    </ul>
    <div className={styles.templateSelector}>
  <h3>Choose a Resume Style</h3>
  <div className={styles.templateOptions}>
   {["modern", "minimalist", "creative", "elegant", "corporate", "bold"].map((tpl) => (
  <button
    key={tpl}
    className={`${styles.templateButton} ${template === tpl ? styles.selected : ""}`}
    onClick={() => setTemplate(tpl as typeof template)}
  >
    {tpl.charAt(0).toUpperCase() + tpl.slice(1)}
  </button>
))}
  </div>
</div>


  </div>
  
  
  
)}

          <div className={styles.navButtons}>
            {currentStep > 0 && (
              <button onClick={() => setCurrentStep(currentStep - 1)}>&larr; Back</button>
            )}
            {currentStep < steps.length - 1 && (
              <button onClick={() => setCurrentStep(currentStep + 1)}>Next &rarr;</button>
            )}
          </div>
        </div>

        <div className={styles.previewSection}>
          {/* <ResumePreview data={data} lang={lang} template={template} /> */}
        <ResumePreview data={useMock ? tempData : data} lang={lang} template={template} />
</div>
      </div>
    </div>
  );
};

export default App;
