import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  Briefcase,
  Calendar,
  GraduationCap,
} from "lucide-react";
import walter from "../resources/walter.jpg";

const DescriptionAndPhoto = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const projects = [
    {
      name: "Car Sales System",
      description:
        "A full-stack car dealership management app. The frontend is built in React, and the backend is a RESTful API built with Spring Boot and PostgreSQL. It supports managing cars, customers, and sales records.",
      link: "https://car-sales-react-fawn.vercel.app/",
      icon: Car,
    },
    {
      name: "Movoo",
      description:
        "Movoo is a ReactJS app that uses an API to showcase trending movies. Users can search for any movie, view details, and save their favorites to a personalized list. Simple, intuitive, and perfect for movie lovers!",
      link: "https://react-movies-movoo.vercel.app/",
      icon: Clapperboard,
    },
    {
      name: "TaskMngr",
      description:
        "TaskMngr is a simple and efficient task manager built with ReactJS. It allows users to add tasks, view their details, and remove them with ease. Designed for simplicity and productivity, it's perfect for staying organized!",
      link: "https://react-task-mngr-nu9b.vercel.app",
      icon: BookmarkCheck,
    },
    {
      name: "Save'o",
      description:
        "Save'o is a ReactJS app for managing savings. It helps users set monthly savings goals and track their progress by logging how much they save each month. Simple and effective for staying on top of financial goals!",
      link: "https://app-poupanca-react.vercel.app",
      icon: CircleDollarSign,
    },
    {
      name: "Mine Swpr",
      description:
        "Mine Swpr is a mobile Minesweeper game built with Flutter. It features an intuitive and responsive design, letting players uncover tiles and flag mines in a seamless gameplay experience. A classic puzzle game tailored for mobile!",
      link: "https://github.com/waltershaquil/flutter-mine-sweeper",
      icon: Bomb,
    },
    {
      name: "Auth System",
      description:
        "A secure authentication system with Angular frontend and Spring Boot backend. Users are stored in a PostgreSQL database. Once authenticated, users can view a list of cars fetched from a custom API built with Spring.",
      link: "https://auth-angular-kappa.vercel.app/",
      icon: Lock,
    },
  ];

  const skills = [
    { icon: SquareDashedBottomCode, label: "Web Development" },
    { icon: Database, label: "Data Analytics", label2: "Data Modeling" },
    { icon: Smartphone, label: "Mobile Development" },
    { icon: PaintbrushVertical, label: "Graphic Design and UI/UX" },
    { icon: Handshake, label: "Team work" },
    { icon: Languages, label: "Multilingual Communication" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Apple-like ease-out
      },
    },
  };

  const scaleHoverRequest = {
    scale: 1.03,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  return (
    <div className="container mx-auto px-6 pb-20 text-white" ref={targetRef}>
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale, y }}
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-visible"
      >
        {/* Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
        />

        <div className="w-full max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center pb-[100px]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-block px-4 py-1.5 mb-4 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
                  <span className="text-primary-light font-medium text-sm">Available for work</span>
                </div>
                <p className="text-foreground/70 text-lg mb-2">Hi there, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent animate-gradient-x">
                    Walter Da Conceicao
                  </span>
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                  I'm a Developer, welcome to my page. Here I have some
                  information about me, my projects, and more.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary rounded-xl font-medium transition-all hover:scale-105"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1.0],
                delay: 0.2,
              }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent rounded-[32px] blur-3xl opacity-60 animate-glow"></div>
                <div className="relative bg-glass p-2 rounded-[32px] transform rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
                  <div className="bg-card rounded-[24px] overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                    <img
                      src={walter}
                      alt="Walter Da Conceicao"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
        className="py-24 relative"
      >
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>

        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 inline-block relative bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About me
          </h2>
          <p className="text-foreground/80 text-lg leading-loose max-w-4xl mx-auto font-light">
            I am a passionate developer with a knack for creating functional and
            visually appealing applications. From dynamic web solutions to
            engaging mobile apps, I love solving problems with code. Welcome to
            my page, where you can explore my projects, skills, and journey in
            the tech world!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={scaleHoverRequest}
              className="group relative min-h-[220px] bg-glass/80 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-lg hover:shadow-primary/10 cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="p-4 rounded-2xl bg-primary/5 mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <skill.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <p className="font-semibold text-xl text-foreground/90 group-hover:text-primary transition-colors">
                {skill.label}
              </p>
              {skill.label2 && (
                <p className="font-semibold text-xl text-foreground/90 group-hover:text-primary transition-colors mt-1">
                  {skill.label2}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
        className="py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={scaleHoverRequest}
              className="group block h-full"
            >
              <div className="bg-glass/80 backdrop-blur-md p-8 h-full flex flex-col rounded-2xl border border-white/5 hover:border-primary/50 transition-colors shadow-sm hover:shadow-2xl hover:shadow-primary/10 sticky top-0">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-500">
                    <project.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-semibold text-foreground/60 border border-white/10 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    View Project
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-foreground/70 leading-relaxed text-base flex-grow font-light">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
        className="py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-glass/90 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="shrink-0">
              <div className="p-5 bg-primary/10 rounded-2xl inline-block">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  Software Development Intern
                </h3>
                <div className="flex items-center gap-2 text-accent bg-accent/10 px-4 py-1.5 rounded-full text-sm font-semibold mt-2 md:mt-0 w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>Sept 2025 - Present</span>
                </div>
              </div>

              <p className="text-primary-light text-xl font-semibold">
                BVM - Bolsa de Valores de Moçambique
              </p>

              <p className="text-foreground/80 leading-loose text-base md:text-lg font-light">
                Gained hands-on experience in systems development, working with
                modern technologies and contributing to real-world projects.
                Developed skills in problem-solving, teamwork, and software
                engineering best practices.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
        className="py-24 pb-40"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            whileHover={scaleHoverRequest}
            className="bg-glass/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all h-full"
          >
            <div className="flex items-start gap-6">
              <div className="shrink-0 p-4 bg-primary/10 rounded-xl">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white leading-tight">
                  Licenciatura em Engenharia Informática
                </h3>
                <p className="text-primary-light font-medium">
                  Instituto Superior de Transportes e Comunicações (ISUTC)
                </p>
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-foreground/60 border border-white/10 mt-2">
                  Completed
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={scaleHoverRequest}
            className="bg-glass/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all h-full"
          >
            <div className="flex items-start gap-6">
              <div className="shrink-0 p-4 bg-primary/10 rounded-xl">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white leading-tight">
                  Google Cybersecurity Certificate
                </h3>
                <p className="text-primary-light font-medium">Google - Coursera</p>
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-foreground/60 border border-white/10 mt-2">
                  Professional Certificate
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DescriptionAndPhoto;
