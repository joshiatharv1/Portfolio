"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs} from "react-icons/si"
import { Tabs, TabsContent, TabsTrigger, TabsList} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { motion } from "framer-motion"
const about=
  {
    title:"About Me",
    description:"Lorem",
    info:[
     { fieldName:"Name",
      fieldValue:""
     },
     { fieldName:"Phone",
      fieldValue:"+1 (781)-873-2929"
     },
     { fieldName:"Email",
      fieldValue:"joshi.atharv1@northeastern.edu"
     }
    ]
  }

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
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            <span></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
</ScrollArea>

              </div>
              </TabsContent>
            <TabsContent value="education" className="w-full">Education</TabsContent>
            <TabsContent value="skills" className="w-full">Skills</TabsContent>
            <TabsContent value="about" className="w-full">About</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div >
  )
}

export default Resume
