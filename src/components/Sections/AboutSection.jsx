import React from 'react'
import {useRef} from 'react';
import {motion, useInView, useScroll, useTransform} from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import {MY_JOURNEY, PASSIONS} from '../../utils/data';

import { containerVarients, itemVariant } from '../../utils/helper';

const AboutSection = () => {
    const {isDarkMode} = useTheme();
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    const isInView = useInView(sectionRef,{once: true, margin: "-100px"});
    const timelineInView = useInView(timelineRef, {
        once: true,
        margin: "-50px",
    });
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0,1], [50, -50]);

    const timelineVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const stepVariants = {
        hidden: {x: -50, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
  return (
     <section
     id = "about"
     ref={sectionRef}
     className={`py-24 px-6 ${
        isDarkMode
        ? "bg-gray-900 text-white" : "bg-white text-gray-900" 
     } relative overflow-hidden`}
     >
        {/**Backgorund elements */}
        <motion.div
        style={{y}} 
        className='absolute inset-0 overflow-hidden'
        >
            <div
            className={`absolute top-40 right-1/3 w-60 h-60 rounded-full blur-3xl opacity-5 ${
                isDarkMode
                ? "bg-blue-500" : "bg-blue-400"
            }`}
            />
            <div
            className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
                isDarkMode
                ? "bg-blue-500" : "bg-blue-400"
            }`}
            />
            </motion.div>

            <div className='max-w-6xl mx-auto relative z-10'>

                {/**About Header */}
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
                        Get To Know Me
                        </motion.div>

                <motion.h2
                variants={itemVariant}
                className='text-3xl md:text-5xl font-light mb-6'
                >
                    About        
                <span className='text-purple-700 font-medium'> Me
                </span>
                </motion.h2>
                </motion.div>    

                <div className='grid lg:grid-cols-2 gap-16 items-start'>

                   {/** Personal Story*/}
                   <motion.div
                   initial="hidden"
                   animate={isInView ? "visible" : "hidden"}
                   variants={containerVarients}
                   className='space-y-8'
                   >
                    <motion.div
                    variants={itemVariant}
                    className={`p-8 rounded-2xl border ${
                        isDarkMode
                        ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                        : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                    }`}
                    >
                      <h3 className='text-2xl font-medium mb-6'>  My Mission
                        </h3>   
                        <p
                        className={`text-lg leading-relaxed mb-6 ${
                            isDarkMode
                            ? "text-gray-300" : "text-gray-700"
                        }`}
                        >
                            In A world where technology is forever evolving, new and innovative 
                            solutions are needed to solve our real world problems. My passion lies
                            in creating beautiful Interfaces that are not just functionable but serve
                            A purpose in problem solving and yet be accesible to everyone.
                            </p>
                            <p
                            className={`text-base leading-relaxed ${
                                isDarkMode
                                ? "text-gray-400" : "text-gray-600"
                            }`}
                            >
                                As A developer Im forever exploring new frameworks to further 
                                improve on my skills which i use to contribute in open sourcing.
                                I love how technologies are constantly evolving and the endless 
                                possibilities they bring to creating meaningful solutions that connect
                                both users and developers.
                                </p>
                                </motion.div>

                  {/**What I lov ebuilding */} 
                  <motion.div
                  variants={itemVariant}
                  className='space-y-4'>
                  <h3
                  className='text-xl font-medium mb-6'>What I Love Building</h3>
                  <div className='grid gap-4'>
                    {PASSIONS.map((passion, index) => (
                        <motion.div
                        key={passion.title}
                        variants={itemVariant}
                        whileHover={{x: 4}}
                        className={`flex items-center space-x-4 p-4 rounded-xl ${
                            isDarkMode
                            ? "bg-gray-800/30 hover:bg-gray-800/50"
                            : "bg-gray-50/50 hover:bg-gray-100/50"
                        }transition-all duration-300`}
                        >
                            <div
                            className={`p-3 rounded-lg ${
                                isDarkMode 
                                ? "bg-gray-700" : "bg-white"
                            }`}
                            >
                                <passion.icon size={20}
                                className='text-purple-700'
                                />
                                </div>
                                <div>
                                    <h4 className='font-medium mb-1'>{passion.title}</h4>  
                                    <p
                                    className={`text-sm ${
                                        isDarkMode 
                                        ? "text-gray-400" : "text-gray-600"
                                    }`}
                                    >
                                        {passion.description}
                                    </p>
                                    </div>
                                    </motion.div>
                    ))}
                    </div>
                    </motion.div>
                    </motion.div>

            {/**My Journey */}
            <motion.div
            ref={timelineRef}
            initial= "hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={timelineVariants}
            className='relative'
            >
                <h3
                className='text-2xl font-medium mb-8 text-center lg:text-left'>
                    My Journey As A Developer
                </h3>

                {/**Timeline Line */}
                <div
                className={`absolute left-8 top-16 bottom-0 w-px ${
                    isDarkMode
                    ? "bg-gray-700" : "bg-gray-300"
                }`}
                />

                <div 
                className='space-y-8'>
                 {MY_JOURNEY.map((step, index) => (
                    <motion.div
                    key={step.year}
                    variants={stepVariants}
                    whileHover={{x: 4}}
                    className='relative flex items-start space-x-6 group'
                    >   

                    {/**Timeline dot */}
                    <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                   <step.icon size={24} className='text-white' />
                   </div>

                   {/**Content */}
                   <div
                   className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                    isDarkMode
                    ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                    : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                   } backdrop-blur-sm`}
                   >
                    <div
                    className='flex items-center justify-between mb-2'>
                        <h4 className='text-xl font-medium'>{step.title}</h4>
                        <span
                        className={`text-sm px-3 py-1 rounded-full ${
                            isDarkMode
                            ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                        }`}
                        >
                            {step.year}
                            </span>
                            </div>
                            <div
                            className={`text-sm font-medium ${
                                isDarkMode
                                ? "text-purple-600" : "text-purple-800"
                            } mb-3`}
                            >
                                {step.company}
                         </div>
                         <p
                         className={`text-sm leading-relaxed ${
                            isDarkMode
                            ? "text-gray-400" : "text-gray-600"
                         }`}
                         >       
                         {step.description}
                         </p>
                         </div>
                         </motion.div>
                 ))}
                 </div>
                 </motion.div>


                    </div>

            </div>
            </section>

  )
}

export default AboutSection
