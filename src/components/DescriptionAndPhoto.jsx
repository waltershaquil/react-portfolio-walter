import React, { useState } from "react";
import {
  Clapperboard,
  BookmarkCheck,
  CircleDollarSign,
  Bomb,
} from "lucide-react";
import { SquareDashedBottomCode } from "lucide-react";
import { Database } from "lucide-react";
import { Handshake } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Languages } from "lucide-react";
import { PaintbrushVertical } from "lucide-react";
import me from "../resources/Subject.png";

function DescriptioAndPhoto() {
  const [projectos, setProjectos] = useState([
    {
      name: "Movoo",
      description:
        "Movoo is a ReactJS app that uses an API to showcase trending movies. Users can search for any movie, view details, and save their favorites to a personalized list. Simple, intuitive, and perfect for movie lovers!",
      link: "",
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
  ]);

  return (
    <div className="p-20">
      <div className="w-full text-white min-h-full gap-4 rounded-md flex flex-row mb-4">
        <div className="w-1/2 min-h-20 rounded-md flex flex-col justify-between">
          <div className="text-left text-2xl font-light mb-1">
            <p className="font-bold">Hi there, I'm</p>
            <text className="font-bold text-3xl mb-2">Walter Da Conceicao</text>
            <p className="leading-[1.5] text-s">
              I'm a Developer, welcome to my page, here I have some information
              about me, my projects, and more.
            </p>
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="w-1/2 min-h-20 rounded-md m-1 items-center flex flex-col">
          <img src={me} alt="walter" />
        </div>
      </div>

      <div className="flex flex-col text-center  w-full mb-20">
        <h2 className="font-bold text-start text-white text-3xl">About me:</h2>
        <p className="text-white text-start text-s mb-10">
          {" "}
          I am a passionate developer with a knack for creating functional and
          visually appealing applications. From dynamic web solutions to
          engaging mobile apps, I love solving problems with code. Welcome to my
          page, where you can explore my projects, skills, and journey in the
          tech world! Throughout my journey i acquired some skills, some of them
          are:
        </p>
        <div className=" text-white font-bold w-full h-full grid grid-cols-4 gap-4">
          <div className=" min-h-[200px] hover:bg-[#493091] outline outline-2 outline-[#493091] rounded-md flex flex-col justify-center items-center text-center">
            <SquareDashedBottomCode />
            <p>Web Development</p>
          </div>

          <div className=" hover:bg-[#493091] outline outline-2 outline-[#493091] min-h-[200px] rounded-md flex flex-col items-center justify-center text-center">
            <Database />
            <p>Data Analytics</p>
            <p>& Data modeling</p>
          </div>
          <div className=" hover:bg-[#493091] outline outline-2 outline-[#493091] min-h-[200px] rounded-md flex flex-col justify-center items-center text-center">
            <Smartphone />
            <p>Mobile Development</p>
          </div>
          <div className=" hover:bg-[#493091] outline outline-2 outline-[#493091] min-h-[200px] rounded-md flex flex-col justify-center items-center text-center">
            <PaintbrushVertical />
            <p>Graphic Design and UI/UX</p>
          </div>
          <div className=" hover:bg-[#493091] outline outline-2 outline-[#493091] min-h-[200px] rounded-md flex flex-col justify-center items-center text-center">
            <Handshake />
            <p>Team work</p>
          </div>
          <div className="hover:bg-[#493091] outline outline-2 outline-[#493091] min-h-[200px] rounded-md flex flex-col justify-center items-center text-center">
            <Languages />
            <p>Multilingual Communication</p>
          </div>
        </div>
      </div>

      <div className=" text-white min-h-full w-full rounded-md flex flex-col gap-4 mb-20">
        <h2 className="font-bold text-white text-3xl">Projects</h2>
        <a
          href="https://react-movies-movoo.vercel.app"
          target="_blank"
          title="Go to React Movies app"
        >
          <div className="outline p-4 hover:bg-[#493091] outline-2 outline-[#493091] flex flex-row items-center text-center rounded-md min-h-[150px] gap-2">
            <div className="  min-w-1/4 min-h-20 ">
              {" "}
              <Clapperboard className="h-[100px] w-[100px]" />
            </div>
            <div className="text-left w-3/4 min-h-20 rounded-md">
              <h4 className="text-xl font-bold">Movoo</h4>{" "}
              <p className="font-semibold text-xs">
                MovieMate is a ReactJS app that uses an API to showcase trending
                movies. Users can search for any movie, view details, and save
                their favorites to a personalized list. Simple, intuitive, and
                perfect for movie lovers!
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://react-task-mngr-nu9b.vercel.app"
          target="_blank"
          title="Go to React Movies app"
        >
          <div className=" p-4 hover:bg-[#493091] flex flex-row outline outline-2 outline-[#493091] items-center text-center rounded-md min-h-[150px] gap-2">
            <div className="min-w-1/4 min-h-20 ">
              {" "}
              <BookmarkCheck className="h-[100px] w-[100px]" />
            </div>
            <div className="text-left w-3/4 min-h-20 rounded-md">
              <h4 className="text-xl font-bold">TaskMngr</h4>{" "}
              <p className="font-semibold text-xs">
                TaskMngr is a simple and efficient task manager built with
                ReactJS. It allows users to add tasks, view their details, and
                remove them with ease. Designed for simplicity and productivity,
                it’s perfect for staying organized!
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://app-poupanca-react.vercel.app"
          target="_blank"
          title="Go to React Movies app"
        >
          <div className=" p-4 hover:bg-[#493091] flex flex-row outline outline-2 outline-[#493091] items-center text-center rounded-md min-h-[150px] gap-2">
            <div className="min-w-1/4 min-h-20 ">
              {" "}
              <CircleDollarSign className="h-[100px] w-[100px]" />
            </div>
            <div className="text-left w-3/4 min-h-20  rounded-md">
              <h4 className="text-xl font-bold">savoo</h4>{" "}
              <p className="font-semibold text-xs">
                Savoo is a ReactJS app for managing savings. It helps users set
                monthly savings goals and track their progress by logging how
                much they save each month. Simple and effective for staying on
                top of financial goals
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/waltershaquil/flutter-mine-sweeper"
          target="_blank"
          title="Go to React Movies app"
        >
          <div className=" p-4 hover:bg-[#493091] flex flex-row outline outline-2 outline-[#493091] items-center text-center rounded-md min-h-[150px] gap-2">
            <div className="  min-w-1/4 min-h-20 ">
              {" "}
              <Bomb className="h-[100px] w-[100px]" />
            </div>
            <div className="text-left w-3/4 min-h-20  rounded-md">
              <h4 className="text-xl font-bold">MineMaster</h4>{" "}
              <p className="font-semibold text-xs">
                MineMaster is a mobile Minesweeper game built with Flutter. It
                features an intuitive and responsive design, letting players
                uncover tiles and flag mines in a seamless gameplay experience.
                A classic puzzle game tailored for mobile!
              </p>
            </div>
          </div>
        </a>
      </div>


      <div className=" text-white min-h-full w-full rounded-md flex flex-col gap-4 mb-20">
        <h2 className="font-bold text-white text-3xl">Formation</h2>

        <div className="p-10 outline hover:bg-[#493091] outline-2 outline-[#493091] flex flex-row items-center text-center rounded-md min-h-[150px] gap-2">
          <div className="text-left w-3/4 min-h-20 rounded-md">
            <h4 className="text-xl font-bold">
              Licenciatura em Engenharia Informática e de
              Telecomunicações(Finalist)
            </h4>{" "}
            <p className="font-semibold text-xs">
              instituto superior de transportes e comunicações (ISUTC)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DescriptioAndPhoto;
