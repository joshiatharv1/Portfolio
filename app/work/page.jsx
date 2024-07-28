"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente ipsum autem!",
    stack: [{name:"Html5"}, {name: "Css3"}, {name: "Javascript"}],
    image: "/path/to/image1.jpg", // Add appropriate image paths
    live: "https://liveproject1.com", // Add live project URL
    github: "https://github.com/project1", // Add GitHub URL
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente ipsum autem!",
    stack: [{name:"Html5"}, {name: "Css3"}, {name: "Javascript"}],
    image: "/path/to/image2.jpg", // Add appropriate image paths
    live: "https://liveproject2.com", // Add live project URL
    github: "https://github.com/project2", // Add GitHub URL
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente ipsum autem!",
    stack: [{name:"Html5"}, {name: "Css3"}, {name: "Javascript"}],
    image: "/path/to/image3.jpg", // Add appropriate image paths
    live: "https://liveproject3.com", // Add live project URL
    github: "https://github.com/project3", // Add GitHub URL
  },
];


const handleSlideChange=(swiper)=>{
  const currentIndex=swiper.activeIndex;
  setProject(projects[currentIndex])
}


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-white text-ouline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              onSlideChange={handleSlideChange}
              spaceBetween={30}
              className="xl:h-[520px] mb-12"
              slidesPerView={1}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                  <div></div>
                  <div>
                    <Image />
                  </div>
                  </div>
                  </SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
