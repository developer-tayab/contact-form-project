import React from "react";
import { FaLariSign, FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
const services = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "App Development",
  },
  {
    id: 3,
    title: "UI/UX Design",
  },
  {
    id: 4,
    title: "System Integration",
  },
  {
    id: 5,
    title: "Other",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};
const container2 = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item2 = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function FromInput() {
  let [backgroundColor, setBackgroundColor] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  let submitData = (data, event) => {
    event.preventDefault();

    console.log("The Data is :", data, "service : ", backgroundColor);
    reset();
  };

  return (
    <section>
      <div className="bg-[#EEEEEE] md:w-[600px] rounded-md py-[3rem] px-[3rem] shadow-[0_0_20px_0_rgba(0,0,0,0.5)] ">
        {/* heading form */}
        <form onSubmit={handleSubmit(submitData)}>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 110,
            }}
            className="text-[#2E0249] text-[20px] pb-6"
          >
            I’m interested in...
          </motion.h1>
          {/* {services cards} */}

          <div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex gap-3 flex-wrap "
            >
              {services.map((service) => {
                return (
                  <motion.li
                    variants={item}
                    onClick={() => setBackgroundColor(service.title)}
                    key={service.id}
                    className={`p-2 text-[#B4A7BD] hover:text-[#ffffff] ${
                      backgroundColor === service.title &&
                      "bg-primary text-[#ffffff]"
                    } hover:bg-primary rounded-sm border-[0.6px] transition-all 2s  border-[#B4A7BD]  cursor-pointer shadow  `}
                  >
                    {service.title}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* {input form} */}

          <motion.div
            variants={container2}
            animate={"visible"}
            initial={"hidden"}
            className="flex flex-col gap-7 pt-10"
          >
            <motion.input
              variants={item2}
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Name must be at most 20 characters",
                },
              })}
              type="text"
              className={`outline-none border-b-[2px] bg-transparent text-[#2E0249] border-b-[#B4A7BD] hover:border-b-[2px] py-2 px-2 rounded-sm hover:border-b-primary `}
              placeholder="Your Name "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
            <motion.input
              variants={item2}
              type="text"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              className={`outline-none border-b-[2px] bg-transparent text-[#2E0249] border-b-[#B4A7BD] hover:border-b-[2px] py-2 px-2 rounded-sm hover:border-b-primary  `}
              placeholder="Your Email "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
            <motion.input
              variants={item2}
              type="text"
              {...register("message", {
                required: { value: true, message: "Message is required" },
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: 100,
                  message: "Message must be at most 100 characters",
                },
              })}
              className={`outline-none border-b-[2px] bg-transparent text-[#2E0249] border-b-[#B4A7BD] hover:border-b-[2px] py-2 px-2 rounded-sm  hover:border-b-primary `}
              placeholder="Your Message"
            />
            {errors.message && (
              <p className="text-red-600">{errors.message.message}</p>
            )}
          </motion.div>

          {/* {Button Submit} */}

          <div className="mt-7">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1, type: "spring", stiffness: 120 }}
              whileTap={{ scale: 0.9, type: "spring", stiffness: 120 }}
              className="bg-primary text-[#ffffff] py-3 px-5 rounded-md flex justify-center items-center gap-2"
            >
              <FaLocationArrow />
              {isSubmitting ? "Loading..." : "Send Message"}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
