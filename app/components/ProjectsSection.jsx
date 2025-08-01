"use client";
import React, { useState, useRef }  from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Solaranlage",
    description: "Nachrüstung einer Solaranlage auf deinem Dach",
    image: '/images/projects/solar.jpg',
    tag: ["Alle"],
  },
  {
    id: 2,
    title: "Rangierhilfe Mover", 
    description: "Professionelle Nachrüstung eines Rangiersystems für müheloses Manövrieren",
    image: '/images/projects/mover.png',
    tag: ["Alle"],
  },
  {
    id: 3,
    title: "Anhängerkupplung",
    description: "Fachgerechte Installation einer hochwertigen Anhängerkupplung",
    image: '/images/projects/anhaengerkupplung.png',
    tag: ["Alle"],
  },
  {
    id: 4,
    title: "Batteriesystem",
    description: "Upgrade auf moderne Lithium-Batterien für längere Autonomie", 
    image: '/images/projects/batterie.png',
    tag: ["Alle"],
  },
  {
    id: 5,
    title: "Dachfenster",
    description: "Einbau von Dachfenstern für mehr Licht und Belüftung",
    image: '/images/projects/dachfenster.png',
    tag: ["Alle"],
  },
  {
    id: 6,
    title: "Dachluke",
    description: "Installation einer praktischen Dachluke mit Fliegengitter",
    image: '/images/projects/dachluke.png',
    tag: ["Alle"],
  },
  {
    id: 7,
    title: "Fahrradträger",
    description: "Montage von robusten Fahrradträgern für Ihre Mobilität",
    image: '/images/projects/fahrradtraeger.png',
    tag: ["Alle"],
  },
  {
    id: 8,
    title: "Gasanlage",
    description: "Wartung und Erweiterung Ihrer Gasinstallation nach aktuellen Standards",
    image: '/images/projects/gasleitung.png',
    tag: ["Alle"],
  },
  {
    id: 9,
    title: "Klimaanlage",
    description: "Installation einer effizienten Klimaanlage für optimalen Komfort",
    image: '/images/projects/klima.png',
    tag: ["Alle"],
  },
  {
    id: 10,
    title: "Radioanlage",
    description: "Moderne Multimedia-Systeme für Entertainment unterwegs",
    image: '/images/projects/radio.png',
    tag: ["Alle"],
  },
  {
    id: 11,
    title: "Schlingerkupplung",
    description: "Sicherheitsupgrade mit professioneller Schlingerkupplung",
    image: '/images/projects/schlingerkupplung.png',
    tag: ["Alle"],
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Alle");
  const ref = useRef(null);
  const isInView = useInView(ref, {one: true});

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
     project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

return (
      <section id="projekte" >
      <div className="mt-2 pt-2 md:mt-8">
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white md:mt-12 md:mb-5 xl:pt-10 mt-16'>
        Projekte
        </h1>
        <div className='text-white flex flex-row justify-center items-center gap-2 pt-4 pb-6'>
          <ProjectTag onClick={handleTagChange} 
          name="Alle" 
          isSelected={tag === "Alle"} 
          />
        </div>
        <ul ref={ref} className="w-full max-w-7xl mx-auto px-6 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {filteredProjects.map((project, index) => (
          <motion.li 
          key={index}
          variants={cardVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}>
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            />
          </motion.li>
          ))}
        </ul>
        </div>
      </section>
  )
}

export default ProjectsSection