import { ResumeData } from "../types";

export const demoData = {
  name: "Yersin Hernandez",
  email: "yersin@example.com",
  phone: "+1 514-555-1234",
  summary: "Experienced IT technician with strong skills in networking and system deployment.",
  education: [
    {
      school: "Champlain College",
      degree: "AEC in Cybersecurity",
      year: "2025 - Present"
    },
    {
      school: "Technical Institute",
      degree: "DEP in Computing Support",
      year: "2024"
    }
  ],
  experience: [
    {
      company: "TTEC",
      role: "Customer Support Technician",
      duration: "2023 - 2024",
      description: "Provided email/chat support and technical assistance to users."
    },
    {
      company: "Freelance",
      role: "IT Support & Deployment",
      duration: "2024 - Present",
      description: "Built MDT labs, automated deployments, and practiced system imaging."
    }
  ],
  skills: ["Networking", "Windows Deployment", "Linux CLI", "React", "SQL"]
};


export const initialData: ResumeData = {
  name: "",
  email: "",
  phone: "",
  summary: "",
  skills: [],
 experience: [{ jobTitle: "", company: "", location: "", startDate: "", endDate: "", description: [""] }],
education: [{ degree: "", school: "", startDate: "", endDate: "", isCurrent: false }],
certificates: [{ name: "", dateObtained: "", comment: "" }],
  languages: [],
  interests: [],
  includeReferences: false,
  portfolio: ""  // ✅ Add this line
};
