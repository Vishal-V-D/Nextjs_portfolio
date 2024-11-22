"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  // Function to handle scroll and check when the "RecentProjects" section is in view
  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      setShowNav(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Conditionally render FloatingNav based on scroll */}
        {showNav && <FloatingNav navItems={navItems} />}
        <Hero />
        {/**<Grid />**/}
        <RecentProjects />
        {/**<Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
