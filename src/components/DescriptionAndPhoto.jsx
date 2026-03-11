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
  Server,
  BrainCircuit,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import walter from "../resources/walter.jpg";

const DescriptionAndPhoto = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const projectContainerRef = useRef(null);
  const { scrollYProgress: projectScrollY } = useScroll({
    target: projectContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const projects = [
    {
      name: "Containerized DMS",
      description:
        "Implementation and containerization of an open-source Document Management System (DMS) using Docker. Configured persistency, isolated environments, and scalable deployments.",
      link: "https://www.github.com/waltershaquil",
      icon: Server,
    },
    {
      name: "AI Supervisor Recommender",
      description:
        "Full-stack prototype with DNN model for academic supervisor recommendation. Includes full data preprocessing pipeline and AI analysis on the backend (Python, Flask, TensorFlow).",
      link: "https://www.github.com/waltershaquil",
      icon: BrainCircuit,
    },
    {
      name: "Car Sales System",
      description:
        "Robust enterprise full-stack app for car dealership management. React frontend for an intuitive UI, Spring Boot RESTful APIs, and PostgreSQL database.",
      link: "https://car-sales-react-fawn.vercel.app/",
      icon: Car,
    },
    {
      name: "Personal Ledger",
      description:
        "Full-stack application for structured personal finance management, including transaction tracking, categorization, analytics, and secure authentication.",
      link: "https://www.github.com/waltershaquil",
      icon: CircleDollarSign,
    },
    {
      name: "Second-hand Clothes Store",
      description:
        "E-commerce platform with customer interface and admin panel. Developed with React & Tailwind CSS, powered by a Supabase and PostgreSQL backend.",
      link: "https://www.github.com/waltershaquil",
      icon: ShoppingBag,
    },
    {
      name: "Savings Challenge",
      description:
        "Next.js application for interactive visualization of savings and investment data, including basic savings categories and individual tracking.",
      link: "https://www.github.com/waltershaquil",
      icon: TrendingUp,
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

        <div className="w-full max-w-7xl relative z-10 px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-16 items-center pb-[100px]">
            {/* Left Content Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 flex-1"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-[5.5rem] font-bold mb-6 leading-[1.1] tracking-tight text-white max-w-3xl">
                  Walter Da Conceição
                </h1>
                <p className="text-xl md:text-2xl text-white/50 font-normal leading-relaxed max-w-2xl">
                  Software Engineer | Financial Systems & Digital Transformation | Full-Stack
                </p>
                <p className="text-base text-white/40 mt-6 max-w-lg">
                  Welcome to my portfolio. Building robust digital, financial, and management ecosystems.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-full font-bold transition-all flex justify-center items-center gap-2"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            {/* Right Graphic/Photo Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1], // Custom snappy ease
                delay: 0.4,
              }}
              className="relative w-full max-w-lg flex justify-end shrink-0"
            >
              {/* Subtle accent glow behind the card cluster */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
              
              <div className="relative w-full h-[400px] md:h-[500px]">


                {/* Main Photo Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 -translate-y-1/2 w-[300px] md:w-[340px] aspect-[4/5] bg-[#121418] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] z-10 border border-white/5 transition-transform duration-700 hover:scale-[1.03]">
                  {/* Thin subtle gradient line at the top of the card mimicking Paddle dashboards */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <img
                    src={walter}
                    alt="Walter Da Conceicao"
                    className="w-full h-full object-cover object-bottom filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Dark gradient overlay for modern sleekness */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#121418] to-transparent pointer-events-none"></div>
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
      <section
        id="projects"
        ref={projectContainerRef}
        className="relative w-full"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center absolute top-24 w-full">
            Featured Projects
          </h2>
          <div className="relative w-full max-w-5xl h-[550px] md:h-[450px] mt-20 flex items-center justify-center">
            {projects.map((project, idx) => {
              // Calculate exactly when this specific card should start its exit animation
              const startExit = idx / projects.length;
              const endExit = (idx + 0.8) / projects.length;
              const initialY = idx * 20; // Increased separation for better stacking visual
              
              // As user scrolls, the active card moves extremely fast UPWARDS (-800px)
              const y = useTransform(projectScrollY, [startExit, endExit], [initialY, -800]);
              
              // Fade out abruptly halfway through the upward motion
              const opacity = useTransform(projectScrollY, [startExit, startExit + 0.1], [1, 0]);

              return (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className="absolute inset-x-0 mx-auto w-[92%] h-full md:w-full md:h-fit rounded-[2rem] border border-white/5 bg-[#121418] p-6 md:p-14 flex flex-col justify-between"
                  style={{
                    // Elements later in the array have lower z-index so they are "under" the stack
                    zIndex: projects.length - idx,
                    y,
                    opacity,
                    top: 0,
                    // Subtle shadow to define individual cards
                    boxShadow: "0 -10px 40px rgba(0,0,0,0.8)"
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="p-5 bg-white/5 rounded-2xl shrink-0 group hover:bg-white transition-colors">
                      <project.icon className="w-10 h-10 text-white group-hover:text-black transition-colors" />
                    </div>
                    
                    <div className="space-y-6 text-left w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h4 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                          {project.name}
                        </h4>
                        <div className="inline-flex w-fit px-4 py-2 rounded-full bg-white text-sm font-bold text-black hover:bg-gray-200 transition-colors cursor-pointer">
                          View Project
                        </div>
                      </div>
                      
                      <div className="h-[1px] w-full bg-white/10"></div>
                      
                      <p className="text-white/60 leading-relaxed text-sm md:text-lg font-light max-w-3xl">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

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

              <ul className="text-foreground/80 leading-relaxed text-base md:text-lg font-light list-disc pl-5 mt-4 space-y-2">
                <li>Developed exchange modules in the Treasury Bonds Auction System for efficient management.</li>
                <li>Full-stack development of critical internal systems: Public Procurement System (React+Express.js), Regulatory Forms Digitization (React+Node.js), and HR/Asset Management System (Laravel).</li>
                <li>Implemented containerization of open-source document management solutions using Docker.</li>
                <li>Maintained and optimized the BVM institutional website.</li>
                <li>Collaborated in Linux/Windows server management, active directory support, and Python/Bash automation scripting.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-glass/90 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all shadow-lg mt-8"
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
                  IT Intern
                </h3>
                <div className="flex items-center gap-2 text-accent bg-accent/10 px-4 py-1.5 rounded-full text-sm font-semibold mt-2 md:mt-0 w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>March 2025 - July 2025</span>
                </div>
              </div>
              <p className="text-primary-light text-xl font-semibold">
                LG Transport, Maputo
              </p>
              <ul className="text-foreground/80 leading-relaxed text-base md:text-lg font-light list-disc pl-5 mt-4 space-y-2">
                <li>Automated cloud backups and digitized documents ensuring data integrity.</li>
                <li>Administered LAN networks, WPA2/WPA3 secure Wi-Fi, and performed hardware maintenance.</li>
                <li>Managed vendors and technical support for GPS/LTE fleet devices.</li>
              </ul>
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
                  Licenciatura em Engenharia Informática e de Telecomunicações
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
