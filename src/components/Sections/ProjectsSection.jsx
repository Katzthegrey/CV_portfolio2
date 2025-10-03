import React from 'react'
import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Globe,
    Zap,
    Users,
} from "lucide-react";

import { useTheme } from '../../context/ThemeContext';
import { PROJECTS } from '../../utils/data';
import ProjectCard from '../ProjectCard';
import { containerVarients, itemVariant } from '../../utils/helper';



const ProjectsSection = () => {
    const {isDarkMode} = useTheme();
    const sectionRef = useRef();
    const isInView = useInView(sectionRef, {once:true, margin: "-100px"});

  return (
   <section
   id="projects"
   ref={sectionRef}
   className={`py-24 px-26 ${
    isDarkMode 
    ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
   } relative overflow-hidden`}
   >

    {/**Background */}
    <div className=''>
        <div className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode
            ? "bg-blue-500" : "bg-blue-400"
        }`}
        />
        <div
        className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode
            ? "bg-purple-500" : "bg-purple-400"
        }`}
        />
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>

            {/**Projects Header */}
        <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVarients}
        className='text-center mb-20'
        >
            <motion.div
            variants={itemVariant}
            className={`text-sm uppercase tracking-widest ${
                isDarkMode
                ? "text-gray-500" : "text-gray-600"
            } mb-4`}
            >
                Featured Work
                </motion.div>

                <motion.h2
                variants={itemVariant}
                className='text-3xl md:text-5xl font-light mb-6'
                >
                Recent 
                <span className='text-purple-700'>
                   Projects 
                    </span> 
                </motion.h2>

                <motion.p
                variants={itemVariant}
                className={`text-lg ${
                    isDarkMode
                    ? "text-gray-400" : "text-gray-600"
                } max-w-2xl mx-auto font-light`}
                >
                    A collection of projects i worked on that showcase my skills in building
                    modern applications and web applications using different tech stacks.
                    </motion.p>
                    </motion.div>

                    {/**Projects Grid */}
                    <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVarients}
                    className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                    >
                       {PROJECTS.map((project, index) => (
                        <ProjectCard 
                        key={project.id}
                        project={project}
                        index={index}
                        isDarkMode={isDarkMode}
                        />
                       ))}
                       </motion.div>

        </div>
        </section>

            );
};

export default ProjectsSection
