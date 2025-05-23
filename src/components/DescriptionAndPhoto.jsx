import React, { useState } from "react";
import {
  Car,
  Clapperboard,
  BookmarkCheck,
  CircleDollarSign,
  Bomb,
  SquareDashedBottomCode,
  Database,
  Handshake,
  Smartphone,
  Languages,
  PaintbrushVertical,
  Lock,
} from "lucide-react";
import me from "../resources/Subject.png";
import { motion } from "framer-motion";

function DescriptioAndPhoto() {
  const [projectos, setProjectos] = useState([
    {
      name: "Car Sales System",
      description:
        "A full-stack car dealership management app. The frontend is built in React, and the backend is a RESTful API built with Spring Boot and PostgreSQL. It supports managing cars, customers, and sales records.",
      link: "https://car-sales-react-fawn.vercel.app/",
    },
    {
      name: "Movoo",
      description:
        "Movoo is a ReactJS app that uses an API to showcase trending movies. Users can search for any movie, view details, and save their favorites to a personalized list. Simple, intuitive, and perfect for movie lovers!",
      link: "https://react-movies-movoo.vercel.app/",
    },
    {
      name: "TaskMngr",
      description:
        "TaskMngr is a simple and efficient task manager built with ReactJS. It allows users to add tasks, view their details, and remove them with ease. Designed for simplicity and productivity, it’s perfect for staying organized!",
      link: "https://react-task-mngr-nu9b.vercel.app",
    },
    {
      name: "Save'o",
      description:
        "Save'o is a ReactJS app for managing savings. It helps users set monthly savings goals and track their progress by logging how much they save each month. Simple and effective for staying on top of financial goals!",
      link: "https://app-poupanca-react.vercel.app",
    },
    {
      name: "Mine Swpr",
      description:
        "Mine Swpr is a mobile Minesweeper game built with Flutter. It features an intuitive and responsive design, letting players uncover tiles and flag mines in a seamless gameplay experience. A classic puzzle game tailored for mobile!",
      link: "https://github.com/waltershaquil/flutter-mine-sweeper",
    },
    {
      name: "Auth System",
      description:
        "A secure authentication system with Angular frontend and Spring Boot backend. Users are stored in a PostgreSQL database. Once authenticated, users can view a list of cars fetched from a custom API built with Spring.",
      link: "https://auth-angular-kappa.vercel.app/",
    },
  ]);

  return (
    <div className="p-6 md:p-20">
      <div className="w-full text-white gap-4 h-[400px] rounded-md flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="text-left text-2xl font-light mb-4">
            <p className="font-bold">Hi there, I'm</p>
            <p className="font-bold text-3xl mb-2 text-[#493091]">
              Walter Da Conceicao
            </p>
            <p className=" text-base font-normal">
              I'm a Developer, welcome to my page, here I have some information
              about me, my projects, and more.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col text-center w-full mb-20"
      >
        <h2 className="font-bold text-start text-white text-3xl">About me:</h2>
        <p className="text-white text-start text-base mb-20">
          I am a passionate developer with a knack for creating functional and
          visually appealing applications. From dynamic web solutions to
          engaging mobile apps, I love solving problems with code. Welcome to my
          page, where you can explore my projects, skills, and journey in the
          tech world! Throughout my journey I acquired some skills:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white font-bold">
          {[
            { icon: <SquareDashedBottomCode />, label: "Web Development" },
            {
              icon: <Database />,
              label: "Data Analytics",
              label2: "Data Modeling",
            },
            { icon: <Smartphone />, label: "Mobile Development" },
            { icon: <PaintbrushVertical />, label: "Graphic Design and UI/UX" },
            { icon: <Handshake />, label: "Team work" },
            { icon: <Languages />, label: "Multilingual Communication" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="min-h-[200px] hover:bg-[#493091] outline outline-2 outline-[#493091] rounded-md flex flex-col justify-center items-center text-center"
            >
              {item.icon}
              <p>{item.label}</p>
              {item.label2 && <p>{item.label2}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white w-full flex flex-col gap-4 mb-20"
      >
        <h2 className="font-bold text-3xl">Projects</h2>
        {projectos.map((proj, idx) => (
          <motion.a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            title={`Go to ${proj.name}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="outline outline-2 outline-[#493091] hover:bg-[#493091] p-4 flex flex-col sm:flex-row items-center rounded-md gap-4">
              <div className="min-h-20 flex justify-center">
                {idx === 0 && <Car className="h-[80px] w-[80px]" />}
                {idx === 1 && <Clapperboard className="h-[80px] w-[80px]" />}
                {idx === 2 && <BookmarkCheck className="h-[80px] w-[80px]" />}
                {idx === 3 && (
                  <CircleDollarSign className="h-[80px] w-[80px]" />
                )}
                {idx === 4 && <Bomb className="h-[80px] w-[80px]" />}
                {idx === 5 && <Lock className="h-[80px] w-[80px]" />}
              </div>
              <div className="text-left w-full">
                <h4 className="text-xl font-bold">{proj.name}</h4>
                <p className="text-sm font-medium">{proj.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white w-full flex flex-col gap-4 mb-20"
      >
        <h2 className="font-bold text-3xl">Formation</h2>
        <div className="p-6 outline hover:bg-[#493091] outline-2 outline-[#493091] rounded-md">
          <h4 className="text-xl font-bold">
            Licenciatura em Engenharia Informática e de Telecomunicações
            (Finalist)
          </h4>
          <p className="text-sm font-medium">
            Instituto Superior de Transportes e Comunicações (ISUTC)
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default DescriptioAndPhoto;
