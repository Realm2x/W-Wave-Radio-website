import { useState } from "react";
import AboutView from "./AboutView";
import { aboutData } from "../../data/aboutData"

export default function AboutContainer() {
    const [staffMembers] = useState(aboutData.staffMembers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
  };

  return (
    <AboutView 
      staffMembers={staffMembers} 
      handleSubmit={handleSubmit}
      aboutText={aboutData.aboutText} 
    />
  );
};
