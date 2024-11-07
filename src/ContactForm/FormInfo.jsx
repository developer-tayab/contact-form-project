import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {delay, motion }  from "framer-motion"
const contactLinks = [
  {
    id: 1,
    icon: <IoMailSharp />,
    title: "xyzabcxyz@gmail.com",
    delay: 0.2,
    x:-100
  },
  {
    id: 2,
    icon: <MdLocalPhone />,
    title: "+92 123456789",
    delay: 0.4,
    x:100
  },
  {
    id: 3,
    icon: <IoLocation />,
    title: "Lahore, Pakistan",
    delay: 0.6,
    x:-100
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/m-tayab/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/developer-tayab",
  },
];


export default function FormInfo() {
  return (
    <section className="  flex flex-col justify-between   ">
      {/* Heading  */}
      <div>
        <motion.h1
        initial={{scale:0.9 , opacity:0}}
        animate={{scale:1 , opacity:1}}
        transition={{duration:0.8 ,delay:0.2}}

        className="text-[poppins] text-[48px] bold text-[#ffffff]   ">
          Let’s discuss on something <span className="text-primary">cool</span>{" "}
          together
        </motion.h1>
      </div>

      {/* {Contact Link} */}
      <div>
        <ul className="flex flex-col gap-3 justify-center">
          {contactLinks.map((link) => (
            <motion.li
            initial={{x:link.x,scale:0.9 , opacity:0}}
            animate={{x:0,scale:1 ,opacity:1}}
            transition={{duration:0.8 ,delay:link.delay}}
            

              key={link.id}
              className="flex items-center w-[70%] gap-2 h-[40px] p-2 rounded-md hover:border-[0.8px] border-[#A91079]  text-primary hover:bg-[#420650] cursor-pointer "
            >
              {link.icon}
              <p className="text-[#ffffff] ">{link.title}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* {social Links} */}
      <div className="">
        <ul className="flex justify-start gap-3 items-center">
          {socialLinks.map((link) => (
            <motion.li
            initial={{opacity:0 }}
            animate={{opacity:1}}
            whileHover={{y:-15,scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{duration:0.3}}
              key={link.id}
              className="flex items-center gap-2 p-3 rounded-full hover:bg-primary cursor-pointer"
            >
              <a className="text-[#ffffff] text-[24px] " href={link.link}>
                {link.icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

    </section>
  );
}
