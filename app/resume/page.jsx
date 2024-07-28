"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs} from "react-icons/si"
import { Tabs, TabsContent, TabsTrigger, TabsList} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { motion } from "framer-motion"
const about = {
  title: "About Me",
  description: "Lorem",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Atharv Joshi"
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (781)-873-2929"
    },
    {
      fieldName: "Email",
      fieldValue: "joshi.atharv1@northeastern.edu"
    }
  ]
};


  const experience={
    icon:"",
    title:"My Experience",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel.",
    items:[
      {
        company:"Affimintus Technologies Pvt Ltd.",
        position:"Java Developer Intern",
        duration:"6 Months"
      }
    ]
  }

  const education={
    icon:"",
    title:"My Education",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel.",
    items:[
      {
        institution:"Northeastern University",
        degree:"MS in Information Systems",
        duration:"2023-2025"
      },
      {
        institution:"Medi-Caps University",
        degree:"BS in Computer Science",
        duration:"2019-2023"
      }
    ]
  }

  const Skills={
    icon:"",
    title:"My Skills",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel.",
    skillSet:[
      {
        icon:<FaHtml5/>,
        name:"html5",
      },
      {
        icon:<FaCss3/>,
        name:"css 3",
      },
      {
        icon:<FaJs/>,
        name:"Javascript",
      },
      {
        icon:<FaReact />,
        name:"React.js",
      },
      {
        icon:<FaNodeJs/>,
        name:"Node.js",
      },
      {
        icon:<SiNextdotjs/>,
        name:"Next.js",
      },
      {
        icon:<SiTailwindcss/>,
        name:"TailwindCss",
      },  
    ]
  }

const Resume = () => {
  return (
    <motion.div
    initial ={{opacity:0}}
    animate={{
      opacity:1,
      transition: {delay: 2.4, duration:'0.4', ease:'easeIn'},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                        justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
</ScrollArea>

              </div>
              </TabsContent>

{/* EDUCATION PART HERE */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                        justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

{/* Skills PArt done here  */}
            <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Skills.title}</h3>
                <p className="max-w-[600px]">{Skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                {Skills.skillSet.map((skill, index)=>{
                  return<li key={index}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
               <div className="flex flex-col gap-[30px]">
               <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                 <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-3 max-w-[620px] mx-auto xl:mx-0">
                 {about.info.map((item, index) => {
                  return <li key={index}
                  className="flex items-center justify-center xl:justify-start gap-4" >
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>
              </li>
      })}
    </ul>
  </div>
</TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div >
  )
}

export default Resume
