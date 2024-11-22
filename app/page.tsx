"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
/*************  ✨ Codeium Command ⭐  *************/
/**
 * The home page of the website, featuring a hero section, recent projects, client testimonials, experience, approach, and a footer.
 * Conditionally renders a floating navbar based on whether the "RecentProjects" section is in view.
 * @returns The JSX for the home page.
 */
/******  f585bba0-e841-46a2-a150-0a9814797c10  *******/
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/** <Grid />**/}
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