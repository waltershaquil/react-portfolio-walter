import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-6 pb-20 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        <div className="w-full max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block px-4 py-1.5 mb-4 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
                  <span className="text-primary-light font-medium text-sm">Available for work</span>
                </div>
                <p className="text-foreground/70 text-lg mb-2">Hi there, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent animate-gradient-x">
                    Walter Da Conceicao
                  </span>
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                  I'm a Developer, welcome to my page. Here I have some
                  information about me, my projects, and more.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary rounded-lg font-medium transition-all hover:scale-105"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent rounded-3xl blur-2xl opacity-60 animate-glow"></div>
                <div className="relative bg-glass p-2 rounded-3xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={walter}
                      alt="Walter Da Conceicao"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
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
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 relative"
      >
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block relative">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About me</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50"></span>
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-4xl mx-auto">
            I am a passionate developer with a knack for creating functional and
            visually appealing applications. From dynamic web solutions to
            engaging mobile apps, I love solving problems with code. Welcome to
            my page, where you can explore my projects, skills, and journey in
            the tech world!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative min-h-[200px] bg-glass p-6 flex flex-col justify-center items-center text-center transition-all cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-10 h-10 text-primary-light group-hover:text-primary transition-colors relative z-10" />
              </div>
              <p className="font-semibold text-lg relative z-10 group-hover:text-white transition-colors">
                {skill.label}
              </p>
              {skill.label2 && (
                <p className="font-semibold text-lg relative z-10 group-hover:text-white transition-colors">
                  {skill.label2}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group block h-full"
            >
              <div className="bg-glass p-6 h-full flex flex-col hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-foreground/60 border border-white/10">
                    View Project
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-foreground/70 leading-relaxed text-sm flex-grow">
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
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-glass p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="shrink-0">
              <div className="p-4 bg-primary/10 rounded-xl inline-block">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">
                  Desenvolvedor de Sistemas
                </h3>
                <div className="flex items-center gap-2 text-accent bg-accent/10 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>Sept 2025 - Present</span>
                </div>
              </div>

              <p className="text-primary-light text-lg font-semibold mb-4">
                BVM - Bolsa de Valores de Moçambique
              </p>

              <p className="text-foreground/80 leading-relaxed">
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
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-glass p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full"
          >
            <div className="flex items-start gap-6">
              <div className="shrink-0 p-4 bg-primary/10 rounded-xl">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Licenciatura em Engenharia Informática
                </h3>
                <p className="text-primary-light text-sm mb-1">
                  Instituto Superior de Transportes e Comunicações (ISUTC)
                </p>
                <p className="text-foreground/60 text-xs">Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-glass p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full"
          >
            <div className="flex items-start gap-6">
              <div className="shrink-0 p-4 bg-primary/10 rounded-xl">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Google Cybersecurity Certificate
                </h3>
                <p className="text-primary-light text-sm mb-1">Google - Coursera</p>
                <p className="text-foreground/60 text-xs">Professional Certificate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DescriptionAndPhoto;
