import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Education",
      content: (
        <div>
         
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-normal mb-8">
            Kalaimagal Matriculation Higher Secondary School (2011 — 2023): Completed comprehensive education from grades 1 through 12, developing a strong academic foundation with a focus on key subjects, preparing for higher education and professional endeavors.
          </p> <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-normal mb-8">
            Chennai Institute of Technology (2023 — 2027): Pursuing a B-Tech degree in Computer Science and Business Systems (CSBS). Engaged in courses related to software development, AI, and business strategies.
          </p>
        </div>
      ),
    },
    {
      title: "Experience",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-normal mb-4">
            AI Developer Intern (2024 — Present): Working on AI-driven projects focusing on smart agriculture and voice AI assistants. Involved in developing machine learning models and integrating them with software applications.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-normal mb-4">
            Web Development Intern at OctaNet (May 2024 — June 2024): Worked on various web development projects, gaining experience with modern web technologies and frameworks. Contributed to the development of responsive and user-friendly websites.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-normal mb-4">
            Cybersecurity Intern at CodeAlpha (June 2024 — July 2024): Focused on enhancing cybersecurity measures, including vulnerability assessments and implementing security protocols. Gained valuable insights into the field of cybersecurity.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-semibold mb-4">
            Java Developer Intern at CodSoft (May 2024 — June 2024): Developed Java-based applications, worked on backend systems, and improved software performance. Acquired hands-on experience in Java development and software engineering practices.
          </p>
        </div>
      ),
    },
    {
      title: "Web and App Development Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm font-norml mb-8">
            Engaged in various web and app development projects, including smart irrigation systems and portfolio websites. Gained hands-on experience with modern development tools and frameworks.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id ="about">
      <Timeline data={data} />
    </div>
  );
}
