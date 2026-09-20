import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DemoClassSpotlight from "./components/DemoClassSpotlight";
import CourseTracks from "./components/CourseTracks";
import CurriculumAccordion from "./components/CurriculumAccordion";
import StudentRoadmap from "./components/StudentRoadmap";
import InteractiveFeatures from "./components/InteractiveFeatures";
import ResourcesSection from "./components/ResourcesSection";
import FAQSection from "./components/FAQSection";
import RegistrationModal from "./components/RegistrationModal";
import FooterBanner from "./components/FooterBanner";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("Programming & DSA Demo Class");

  const handleOpenRegistration = (trackName) => {
    setSelectedTrack(trackName || "Programming & DSA Demo Class");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Navigation Header */}
      <Navbar onOpenRegistration={handleOpenRegistration} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenModal={handleOpenRegistration} />

        {/* Demo Class Spotlight (Flyer Trial Card) */}
        <DemoClassSpotlight onOpenRegistration={handleOpenRegistration} />

        {/* Sheryians-Style Course Grid (Active DSA + Upcoming Agentic AI) */}
        <CourseTracks onOpenRegistration={handleOpenRegistration} />

        {/* Detailed 5-Module Curriculum Accordion */}
        <CurriculumAccordion onOpenRegistration={handleOpenRegistration} />

        {/* 3-Step Student Career Roadmap */}
        <StudentRoadmap onOpenRegistration={handleOpenRegistration} />

        {/* Verified Learning Resources & Notes */}
        <InteractiveFeatures />

        {/* Downloadable Cheat Sheets */}
        <ResourcesSection />

        {/* FAQs */}
        <FAQSection onOpenRegistration={handleOpenRegistration} />
      </main>

      {/* Footer & Flyer Banner Bar */}
      <FooterBanner onOpenRegistration={handleOpenRegistration} />

      {/* Global Registration & Lead Capture Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedTrack={selectedTrack}
      />
    </div>
  );
}
